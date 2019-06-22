import React, { Component } from 'react';
import form from 'react-bootstrap/Form';
import {Button, FormGroup, Label, Input} from 'reactstrap';
import '../App.css'
import {Link} from "react-router-dom";
import { GoogleLoginButton } from 'react-social-login-buttons';



const defaultState = {username: '', password: '', submitted: false};

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = defaultState;
    }

handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name] : value});
};


    handleSubmit = (event) =>{
        // console.log(event);
        event.preventDefault();
        this.props.onComplete(this.state);
        this.setState(defaultState);
        console.log(this.state.username);
    };

    handleOnClick = () => {
        let googleURL = "https://accounts.google.com/o/oauth2/v2/auth";
        let options = {
            client_id:'562551923221-v15mgv44cn7dvpol98mhu8klldahg0o2.apps.googleusercontent.com',
            redirect_uri: 'http://localhost:3000/oauth',
            scope: 'email openid profile',
            prompt: 'consent',
            response_type: 'code'
        }
        let QueryString = Object.keys(options).map( (key,i) => {
            return `${key}=` + encodeURIComponent(options[key]);
        }).join("&");
        let authURL = `${googleURL}?${QueryString}`;

        return window.open(authURL, '',
        )
    }


    render() {


        //Jerome - type is going to tell me if my form is a login or a signup
        let {type} = this.props;
        type = type === 'login' ? 'login' : 'signup';

        const emailJSX =

            <form className="email-form" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                    placeholder='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                </FormGroup>
            </form>

        return (

            <form className="login-form" onSubmit={this.handleSubmit}>
                <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                   placeholder="Enter Username"
                    name='username'
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                </FormGroup>

                {type !== 'login' ? emailJSX : undefined}

                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                    placeholder='password'
                    name="password"
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                </FormGroup>

                <Button className="btn-lg btn-dark btn-block" type='submit'>{type}</Button>
                <div className="text-center pt-3"> Or continue with your social account</div>
                <GoogleLoginButton onClick={this.handleOnClick} className="mt-3 mb" className="google"/>

                {type!=='login' ? <Link to='/login' clasName="btn-link">Back to Log In </Link>:null}
            </form>
        );
    }
};