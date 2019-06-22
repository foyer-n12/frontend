import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import {Button, FormGroup, Label, Input} from 'reactstrap';
import '../App.css'

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
        type = type === 'login' ? 'login' : 'signup';

        const emailJSX =
            <form className="login-form" onSubmit={this.handleSubmit}>
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
            </form>
        );
    }
};