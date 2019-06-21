import React from 'react';
import * as authActions from '../Action/auth-actions';
import {Link} from "react-router-dom";
import AuthForm from "./Auth-Form";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'react-bootstrap/Button';

import TextField from 'material-ui/TextField';
import Register from '../Landing/Register';

import {connect} from 'react-redux';
import {ButtonToolbar} from "react-bootstrap";

class Landing extends React.Component{

    handleSignup = (user) => {
        return this.props.pDoSignUp(user);
    };
    handleLogin = (user) => {
        return this.props.pDoLogin(user.username, user.password);
    };

    // handleLogout = (user) => {
    //     return this.props.pDoLogout(user.username, user.password);
    // };

    render() {

        const rootJSX =
            <div  className="col-md-6 col-md-offset-3">
                {/*<MuiThemeProvider>*/}
                <div>
                    <label htmlFor="username"><h1>Welcome</h1></label>
                    <ButtonToolbar>
                        <Link to='/signup'>
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <Button variant="primary"> Sign up</Button>
                        </Link>
                    </ButtonToolbar>

                    <br/>

                    <Link to='/login'>
                        <button type="button"> Login</button>
                    </Link>

                </div>
                {/*</MuiThemeProvider>*/}
            </div>;

        const signUpJSX =
            <div>
                <label> <h1>Sign Up</h1></label>
                <AuthForm type='signup' onComplete={this.handleSignup}/>
                <Link to='/login' clasName="btn-link">Cancel </Link>
            </div>;

        const loginJSX =
            <div>
                <label> <h1>Login</h1></label>

                <AuthForm type='login' onComplete={this.handleLogin}/>
                <Link to='/signup'>
                    <div>
                        <button>SignUp</button>

                    </div>
                </Link>
            </div>;

        const {location} = this.props;
        return(
            <div>
                <nav>
                    {location.pathname === '/' ? rootJSX : undefined }
                    {location.pathname === '/signup' ? signUpJSX : undefined }
                    {location.pathname === '/login' ? loginJSX : undefined }
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