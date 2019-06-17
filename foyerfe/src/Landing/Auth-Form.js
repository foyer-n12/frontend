import React, { Component } from 'react';
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
            <input
                name='email'
                placeholder='email'
                type='email'
                value={this.state.email}
                onChange={this.handleChange}
            />;
        const {username, password, submitted } = defaultState;
        return (
            <form name="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !username ? ' has error' : '')}>
                <label htmlFor="username">Username</label>
                <input
                    className="form-control"
                    name='username'
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                    {submitted && !username && <div className="help-block">Username is required</div>
                    }
                {type !== 'login' ? emailJSX : undefined}
                </div>
                <label htmlFor="username">Password</label>
                <input
                    className="form-control"
                    name='password'
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                {submitted && !password && <div className="help-block">Password is required</div>
                }
                <button type='submit'>{type}</button>
                {/*<Register/>*/}
            </form>
        );
    }
};