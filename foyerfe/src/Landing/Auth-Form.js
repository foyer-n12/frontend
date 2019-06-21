import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {AuthLanding} from "./Landing";
import App from "../App";
import Register from "./Register";

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


    render() {
        //Jerome - type is going to tell me if my form is a login or a signup
        let {type} = this.props;
        type = type === 'login' ? 'login' : 'signup' || 'logout';

        const emailJSX =
            <Form name="form" onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicuEmail">
                    <Form.Label htmlFor="username">Email</Form.Label>
                    <Form.Control
                    name='email'
                    placeholder='email'
                    type='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                </Form.Group>
            </Form>

        return (
            <form name="form" onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicUsername">
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control
                   placeholder="Enter Username"
                    name='username'
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                </Form.Group>

                {type !== 'login' ? emailJSX : undefined}

                <Form.Group controlId="formBasicuPassword">

                    <Form.Label htmlFor="password">Password</Form.Label>

                    <Form.Control
                    placeholder='password'
                    name="password"
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                </Form.Group>

                <Button variant="primary" type='submit'>{type}</Button>
            </form>
        );
    }
};