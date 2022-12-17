import { useState} from "react";
import { createAuthUserFromEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [formField, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formField;
    

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
        if (password === confirmPassword) {
            try {
                const {user} = await createAuthUserFromEmailAndPassword(email, password);
                await createUserDocumentFromAuth(user, {displayName});
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
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
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
        </div>
    )
}

export default SignUp