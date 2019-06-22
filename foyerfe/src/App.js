import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import AuthLanding from './Landing/Landing';
import AuthRedirect from './AuthRedirect/AuthRedirect';
import {Dashboard} from "./Dashboard/Dashboard";



export default class App extends React.Component {

    render(){
        return(
            <div>
                <BrowserRouter>
                    <Route path="*" component={AuthRedirect}/>
                    <Route exact path="/" component={AuthLanding}/>
                    <Route exact path="/login" component={AuthLanding}/>
                    <Route exact path="/signup" component={AuthLanding}/>
                    <Route exact path="/Dashboard" component={Dashboard}/>
                </BrowserRouter>
            </div>
        )
    }

}