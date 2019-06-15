import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import AuthLanding from './Landing/AuthLanding';
import Dashboard from './Dashboard/Dashboard';
import Register from './Landing/Register';
import AuthRedirect from './AuthRedirect/AuthRedirect';

export default class App extends React.Component {
    render(){

        return(
            <div>
                <BrowserRouter>
                    <Route path="*" component={AuthRedirect}/>
                    <Route exact path="/" component={AuthLanding}/>
                    <Route exact path="/login" component={AuthLanding}/>
                    <Route exact path="/signup" component={AuthLanding}/>
                    <Route exact path="/logout" component={AuthLanding}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                </BrowserRouter>
            </div>

        )
    }
}