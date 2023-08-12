import React from 'react';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { LoginBox } from './login-page.styles';

const LoginPage = () => {
  return (
    <LoginBox>
        <SignInForm />
    </LoginBox>
  )
}

export default LoginPage;