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


const Home =  lazy(() => import("./routes/home/home.component"));
const Navigation =  lazy(() => import("./routes/navigation/navigation.component"));
const Authentication =  lazy(() => import("./routes/authentication/authentication.component"));
const Shop =  lazy(() => import("./routes/shop/shop.component"));
const Checkout =  lazy(() => import("./routes/checkout/checkout.component"));


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSession())
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
          <Route path="authentication" element= {<Authentication/>} />
          <Route path="checkout" element= {<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  )
  
}

export default App;


