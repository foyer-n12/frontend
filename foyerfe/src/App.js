import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import AuthLanding from './Landing/AuthLanding';
import Register from './Landing/Register';
import AuthRedirect from './AuthRedirect/AuthRedirect';
import Landing from './Landing/Landing';
import DashBoard from './dashBoard/DashBoard';
import NoteDashboard from './Notes/NoteDashboard';


export default class App extends React.Component {

    render(){
        return(
            <div>
                <BrowserRouter>
                    <Route path="*" component={AuthRedirect}/>
                    <Route exact path="/" component={AuthLanding}/>
                    <Route exact path="/login" component={AuthLanding}/>
                    <Route exact path="/signup" component={AuthLanding}/>
                </BrowserRouter>
            </div>
        )
    }

}