import React from 'react';
import Landing from './Landing/Landing';
import DashBoard from './dashBoard/DashBoard';
import Register from './Landing/Register';
import NoteDashboard from './Notes/NoteDashboard';

export default class App extends React.Component {

    render(){
        return(
            <div>
                <Landing/>
                <DashBoard/>

            <main>
                <Landing/>
                <br/>
                <Register/>

            </main>

                <p>
                    <NoteDashboard/>
                </p>
            </div>
        )
    }

}