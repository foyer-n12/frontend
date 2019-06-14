import React from 'react';
import Landing from './Landing/Landing';
import DashBoard from './dashBoard/DashBoard';
import Register from './Landing/Register';


export default class App extends React.Component {

    render(){
        return(
            <main>
                <Landing/>
                <br/>
                <Register/>
                <DashBoard/>
            </main>
        )
    }

}