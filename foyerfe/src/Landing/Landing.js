import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Landing extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <TextField
                        hintText="Please enter your Username"
                        floatingLabelText="Username"
                        onChange={(event, newValue) =>
                            this.setState({username:newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Please enter your Password"
                            floatingLabelText="Password"
                            onChange={(event,newValue) =>
                            this.setState({password:newValue})}
                            />
                            <br/>
                            <RaisedButton label="Sign In" primary={true}/>
                </MuiThemeProvider>
            </div>
        );

    }

};