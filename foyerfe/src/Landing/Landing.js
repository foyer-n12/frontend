import React from 'react';
import * as authActions from '../Action/auth-actions';
import {Link} from "react-router-dom";
import AuthForm from "./Auth-Form";
import Button from 'react-bootstrap/Button';


import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class Landing extends React.Component{

    handleSignup = (user) => {
        return this.props.pDoSignUp(user);
    };
    handleLogin = (user) => {
        return this.props.pDoLogin(user.username, user.password);
    };

    render() {

        const signUpJSX =
            <div className="login">
                <h1 className="sign">Foyer</h1>
                <AuthForm type='signup' onComplete={this.handleSignup}/>
            </div>;

        const loginJSX =
            <div className="login">
                <h1 id="foyer">Foyer</h1>
                <Link to='/signup'>
                    <div>
                        <Button className="btn-dark btn-md" className="but" type='submit'>Sign Up</Button>

                    </div>
                </Link>
                <p>Foyer is an application that enables you to use it as your main browser page with different functionalities embedded</p>
                <AuthForm type='login' onComplete={this.handleLogin}/>
            </div>;

        const {location} = this.props;
        return(
            <div>
                <nav>
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
    // pDoLogout: (username, password) => {
    //     return dispatch(authActions.logutRequest(username, password))
    // },
});

export default connect(null, mapDispatchToProps)(Landing);