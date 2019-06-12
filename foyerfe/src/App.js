import React from 'react';
import Landing from './Landing/Landing';
import DashBoard from './dashBoard/DashBoard';

export default class App extends React.Component {

    render(){
        return(
            <div>
                <Landing/>
                <DashBoard/>
            </div>
        )
    }

}