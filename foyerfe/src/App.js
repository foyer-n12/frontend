import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import AuthLanding from './Landing/Landing';
import Dashboard from './Dashboard/Dashboard';
import AuthRedirect from './AuthRedirect/AuthRedirect';

/**
 * This contains our main React app component
 */
export default class App extends React.Component {

    /**
     * Renders Login or Signup depending on user request.
     * If a token exists, it passes the user to the Dashboard.
     * @returns {*}
     */
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