import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AuthForm from './Auth-Form';

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            password_confirm: '',
            submitted: false
        }

    }
    // handleInputChange(){
    //
    // }
    //
    // handleSubmit(){
    //
    // }
    handleClick(event){
        console.log(event);
    }

    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        {/*<AppBar*/}
                        {/*    title="Register"*/}
                        {/*    />*/}
                            <TextField
                                hintText="Enter your First Name"
                                floatingLabelText="First Name"
                                onChange = {(event,newValue) =>
                            this.setState({first_name:newValue})}
                            />
                                <br/>
                                <TextField
                                    hintText="Enter your Last Name"
                                    floatingLabelText="Last Name"
                                    onChange = {(event,newValue) =>
                                this.setState({last_name:newValue})}
                                />
                                <br/>
                                <TextField
                                    hintText="Enter your Email"
                                    type="email"
                                    floatingLabelText="Email"
                                    onChange = {(event,newValue) =>
                                    this.setState({email:newValue})}
                                    />
                                    <br/>
                                    <TextField
                                        hintText="Enter your password"
                                        type="password"
                                        floatingLabelText="Password"
                                        onChange = {(event,newValue) =>
                                        this.setState({password:newValue})}
                                        />
                                        <br/>
                                        <RaisedButton label="Sing Up" secondary={true} onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}