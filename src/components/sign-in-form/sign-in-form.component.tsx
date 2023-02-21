import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
//import { signInUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.util";
import { googleSignInStart,  emailSignInStart } from "../../store/user/user.action";
import {SignInContainer, SignInHeader, SignInButtonContainer} from './sign-in-form.styles'


export interface DefaultSignInFields {
    email: string;
    password: string;
}

const defaultSignInFields: DefaultSignInFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const dispatch = useDispatch()
    const [signInFields, setSignInFields] = useState(defaultSignInFields);

    const {email, password} =  signInFields;

    const resetFormField = (): void => {
        setSignInFields(defaultSignInFields)
    }

    const signInonSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            dispatch(emailSignInStart(email, password));
            resetFormField()
        } catch (error) {

            switch((error as AuthError).code) {
                case AuthErrorCodes.INVALID_PASSWORD:
                    alert('Incorrect Password')
                    break;
                case AuthErrorCodes.INVALID_EMAIL:
                    alert('No user assosiated with this email')
                    break;
                default :
                    console.log(error)
                
            }
        }
    }
    
    const logGoogleUser = (): void => {
        dispatch(googleSignInStart())
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target;

        setSignInFields({...signInFields, [name]: value})
    }
    return (
        <SignInContainer>
            <SignInHeader>I already have an account</SignInHeader>
            <span>Sign in with your Email and Password</span>
            <form onSubmit={signInonSubmitHandler}>
                <FormInput 
                    label='Email'
                    type={'email'}
                    name='email' 
                    onChange= {onChangeHandler}
                    required
                    value= {email} 
                />
                <FormInput 
                    label='Password'
                    type={'password'}
                    name='password' 
                    onChange= {onChangeHandler}
                    required
                    value= {password} 
                />
                <SignInButtonContainer>
                    <Button type='submit' >Sign in</Button>
                    <Button type='button' onClick={logGoogleUser} buttonTypes={BUTTON_TYPE_CLASSES.google}>google sign in</Button>
                </SignInButtonContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;