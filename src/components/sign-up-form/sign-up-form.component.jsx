import { useState} from "react";
import { useDispatch } from "react-redux";
import { createAuthUserFromEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { userSignUpStart } from "../../store/user/user.action";
import {SignUpContainer, SignUpHeader} from './sign-up-form.styles'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [formField, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formField;
    
    const dispatch = useDispatch();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
        if (password === confirmPassword) {
            try {
                //const {user} = await createAuthUserFromEmailAndPassword(email, password);
                //await createUserDocumentFromAuth(user, {displayName});
                dispatch(userSignUpStart(email, password, displayName))
                resetFormField();
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('cannot create user, email already in use')
                }else {
                    console.log('user creation encountered an error', error)
                }
            }
           

        }else {
            alert('Passwords do not match')
        }
    }

    const resetFormField = () => {
        setFormFields(defaultFormFields)
    }

    const changeHandler = (event) => {
        const { name, value} = event.target;
        
        setFormFields({...formField, [name] : value})
    }

    return (
        <SignUpContainer>
            <SignUpHeader>Don't have an account?</SignUpHeader>
            <span>Sign Up with Email and Password</span>
            <form onSubmit={onSubmitHandler}>
                <FormInput 
                    label='Display Name'
                    type={'text'} 
                    onChange= {changeHandler} 
                    name='displayName' 
                    value={displayName} 
                    required
                />
                <FormInput 
                    label='Email'
                    type={'email'}
                    onChange= {changeHandler} 
                    name='email' 
                    value={email} 
                    required
                />
                <FormInput 
                    label='Password'
                    type={'password'} 
                    onChange= {changeHandler} 
                    name='password' 
                    value={password} 
                    required
                />
                <FormInput 
                    label='Confirm Password'
                    type={'password'} 
                    onChange= {changeHandler} 
                    name='confirmPassword' 
                    value={confirmPassword} 
                    required
                />
                <Button type='submit'>Sign up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUp