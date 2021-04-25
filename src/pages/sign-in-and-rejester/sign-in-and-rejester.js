import React from 'react';
import './sign-in-and-rejester.scss';
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up'


const SignInAndSignUppage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn className="signin"/>
        <SignUp className="signup"/>
    </div>
);

export default SignInAndSignUppage;