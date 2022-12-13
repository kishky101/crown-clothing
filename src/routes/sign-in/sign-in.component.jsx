import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.util"
import SignUp from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
 
    return (
        <div>
            <h1>I am the sign in</h1>
            <button onClick={logGoogleUser}> Sign In with Google </button>
            <SignUp />
        </div>)
}

export default SignIn