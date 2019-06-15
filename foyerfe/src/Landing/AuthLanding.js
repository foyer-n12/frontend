import React from 'react';
import * as authActions from '../Action/auth-actions';
import {Link} from "react-router-dom";
import {Landing} from "../Landing/Landing";

import {connect} from 'react-redux';

class AuthLanding extends React.Component{

    handleSignup = (user) => {
        return this.props.pDoSignUp(user);
    };
    handleLogin = (user) => {
        return this.props.pDoLogin(user.username, user.password);
    };

    render() {
        const rootJSX =
            <div>
                <h1>Welcome</h1>
                <Link to='/signup'>Sign up</Link>
                <Link to='/login'>Login</Link>
            </div>;

        const signUpJSX =
            <div>
                <h1>Sign Up</h1>
                <AuthLanding type='signup' onComplete={this.handleSignup}/>
                <Link to='/login'>Login</Link>
            </div>;

        const loginJSX =
            <div>
                <h1>Login</h1>
                <AuthLanding type='login' onComplete={this.handleLogin}/>
                <Link to='/signup'>Signup</Link>
            </div>;

        const {location} = this.props;
        return(
            <div>
                <nav>
                    {location.pathname === '/' ? rootJSX : undefined }
                    {location.pathname === '/login' ? loginJSX : undefined }
                    {location.pathname === '/signup' ? signUpJSX : undefined }
                </nav>
            </div>
        );
    }
}

//Jerome - I want to create a function that starts an async action
//Jerome - this p means that the function returns promise
const mapDispatchToProps = dispatch => ({
    pDoSignUp: user => {
        return dispatch(authActions.signupRequest(user))
    },
    pDoLogin: (username, password) => {
        return dispatch(authActions.loginRequest(username, password))
    },
});

export default connect(null, mapDispatchToProps)(AuthLanding);