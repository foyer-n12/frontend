import React, { Component } from 'react';
// import AppBar from 'material-ui/AppBar';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
import {AuthLanding} from "../Landing/AuthLanding";
import App from "../App";

// const defaultState = {username: '', email: '', password: ''};

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name] : value});
};


    handleSubmit = (event) =>{
        // console.log(event);
        event.preventDefault();
        // this.props.onComplete(this.state);
        this.setState({username: event.target.username.value});
        console.log(this.state.username);
    };

    render() {
        //Jerome - type is going to tell me if my form is a login or a signup
        let {type} = this.props;
        type = type === 'login' ? 'login' : 'signup';

        const emailJSX =
            <input
                name='email'
                placeholder='email'
                type='email'
                value={this.state.email}
                onChange={this.handleChange}
            />;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name='username'
                    placeholder='username'
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                {type !== 'login' ? emailJSX : undefined}
                <input
                    name='password'
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button type='submit'>{type}</button>
            </form>
        );
    }
};