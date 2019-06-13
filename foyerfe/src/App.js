import React from 'react';
import Landing from './Landing/Landing';
import Register from './Landing/Register';

export default class App extends React.Component {
    render(){

        return(

            <main>
                <Landing/>
                <br/>
                <Register/>

            </main>


        )
    }
}