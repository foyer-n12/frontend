import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import App from "../App";

export default class Landing extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }


    // handleInputChange(e){
    //     // Jerome - this enables you to update the input fields
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    //
    // handleOnChange(e){
    //     // Jerome - this is where you mutate the state
    //     e.preventDefault();
    //     const user = {
    //         username: this.state.username,
    //         password: this.state.password,
    //     };
    //     console.log(user);
    // }


    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title="Login"
                    />
                    <TextField
                        hintText="Please enter your Username"
                        floatingLabelText="Username"
                        onChange={(event,newValue) =>
                        this.setState({username:newValue})}
                        // onChange={this.handleInputChange}
                        // value={this.handleOnChange}
                        />
                        <br/>
                        <TextField
                            hintText="Please enter your Password"
                            floatingLabelText="Password"
                            onChange={(event,newValue) =>
                                this.setState({password:newValue})}
                            // onChange={this.handleInputChange}
                            // value={this.handleOnChange}
                            />
                            <br/>
                            <RaisedButton label="Sign In" primary={true} onClick={(event) => this.handleClick(event)}/>
                </MuiThemeProvider>
            </div>
        );

    }

};