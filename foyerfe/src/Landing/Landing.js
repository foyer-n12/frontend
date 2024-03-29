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