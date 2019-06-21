import React from 'react';
import * as authActions from '../Action/auth-actions';
import {Link} from "react-router-dom";
import AuthForm from "./Auth-Form";
import Button from 'react-bootstrap/Button';
import {Label} from 'reactstrap';


import {connect} from 'react-redux';
import {ButtonToolbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Landing extends React.Component{

    handleSignup = (user) => {
        return this.props.pDoSignUp(user);
    };
    handleLogin = (user) => {
        return this.props.pDoLogin(user.username, user.password);
    };

    render() {

        const rootJSX =
            {/*<div className="main">*/}
            {/*        <div>*/}
                        {/*<span className="greeting"><h1>Welcome</h1></span>*/}
                        {/*<ButtonToolbar>*/}
                        {/*<Link to='/signup'>*/}
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    {/*<Button className="btn-lg btn-blue btn-block" className="btn"> Sign up</Button>*/}
                {/*</Link>*/}
                {/*        </ButtonToolbar>*/}

                {/*<Link to='/login'>*/}
                {/*    <button type="button"> Login</button>*/}
                {/*</Link>*/}

            {/*</div>*/}

            {/*</div>;*/}

        const signUpJSX =
            <div>
                <h1 className="sign">Sign Up</h1>
                <AuthForm type='signup' onComplete={this.handleSignup}/>
                <Link to='/login' clasName="btn-link">Back to Log In </Link>
            </div>;

        const loginJSX =
            <div>
                <h1 className="login">Log In</h1>

                <AuthForm type='login' onComplete={this.handleLogin}/>
                <Link to='/signup'>
                    <div>
                        <Button className="btn-lg btn-dark btn-block"  type='submit'>Sign Up</Button>

                        {/*<button>SignUp</button>*/}

                    </div>
                </Link>
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