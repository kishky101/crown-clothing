import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./global.styles";

// import { 
//   onAuthStateChangedListener, 
//   createUserDocumentFromAuth,
//   getCurrentUser 
// } from "./utils/firebase/firebase.util";
import { checkUserSession } from "./store/user/user.action";
import Spinner from "./components/spinner/spinner.component";
import ProductDetails from "./components/product-details/product-details.component";
import { fetchCategoriesStart } from "./store/categories/categories.action";


const Home =  lazy(() => import("./routes/home/home.component"));
const Navigation =  lazy(() => import("./routes/navigation/navigation.component"));
// const Authentication =  lazy(() => import("./routes/authentication/authentication.component"));
const Shop =  lazy(() => import("./routes/shop/shop.component"));
const Checkout =  lazy(() => import("./routes/checkout/checkout.component"));
const SignInPage = lazy(() => import("./routes/login-page/login-page.component"));
const SignUpPage = lazy(() => import("./routes/signup-page/signup-page.component"));


// const box = {category: "men's clothing",
// description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// id:1,
// image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// price:109.95,
// rating:{rate: 3.9, count: 120},
// title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCategoriesStart());
  })

  // useEffect(() => {
  //   const unSubscribe = onAuthStateChangedListener((user) => {
  //       if (user) {
  //           createUserDocumentFromAuth(user)
  //       }
  //       dispatch(setCurrentUser(user))
  //   })

  //   return unSubscribe
  // })

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element= {<Navigation />} >
          <Route index element= {<Home />} />
          <Route path="shop/*" element= {<Shop/>}/>
          {/* <Route path="/*" element= {<Shop />} /> */}
          <Route path=":productId" element={<ProductDetails />}/>
          {/* <Route path="authentication" element= {<Authentication/>} /> */}
          <Route path="login" element= {<SignInPage />} />
          <Route path="signup" element= {<SignUpPage />} />
          <Route path="checkout" element= {<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  )
  
}

export default App;


