import React from 'react';
import * as authActions from '../Action/auth-actions';
import {Link} from "react-router-dom";
import Landing from "../Landing/Landing";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import {connect} from 'react-redux';

class AuthLanding extends React.Component{

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
            <div>
                <MuiThemeProvider>
                    <div>
                <h1>Welcome</h1>
                <Link to='/signup'>
                    <button type="button"> Sign up</button>
                </Link>
                <br/>
                <Link to='/login'>
                    <TextField
                        hintText="Login"
                        type="text"
                     />
                </Link>
            </div>
        </MuiThemeProvider>
            </div>;

        const signUpJSX =
            <div>
                <h1>Sign Up</h1>
                <Landing type='signup' onComplete={this.handleSignup}/>
                <Link to='/login'>Login</Link>
            </div>;

        const loginJSX =
            <div>
                <h1>Login</h1>
                <Landing type='login' onComplete={this.handleLogin}/>
                <Link to='/signup'>Signup</Link><br/>
                {/*<Link to='/login'>Logout</Link>*/}
            </div>;

        // const logoutJSX =
        //     <div>
        //         <h1>LogOut</h1>
        //         <Landing type='logout' onComplete={this.handleLogout}/>
        //         <Link to='/login'>Login</Link>
        //     </div>;


        const {location} = this.props;
        return(
            <div>
                <nav>
                    {location.pathname === '/' ? rootJSX : undefined }
                    {location.pathname === '/signup' ? signUpJSX : undefined }
                    {location.pathname === '/login' ? loginJSX : undefined }
                    {/*{location.pathname === '/logout' ? logoutJSX : undefined }*/}
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

export default connect(null, mapDispatchToProps)(AuthLanding);