import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { signInUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.util";

import {SignInContainer, SignInHeader, SignInButtonContainer} from './sign-in-form.styles'

const defaultSignInFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [signInFields, setSignInFields] = useState(defaultSignInFields);

    const {email, password} =  signInFields;


    const signInonSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            await signInUserWithEmailAndPassword(email, password);
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect Password')
                    break;
                case 'auth/user-not-found':
                    alert('No user assosiated with this email')
                    break;
                default :
                    console.log(error)
                
            }
        }
        
    }
    
    const logGoogleUser = async () => {
        await signInWithGooglePopup(); 
    }

    const onChangeHandler = (event) => {
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