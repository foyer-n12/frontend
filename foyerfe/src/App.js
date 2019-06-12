import React from 'react';
import Landing from './Landing/Landing';
<<<<<<< HEAD
import DashBoard from './dashBoard/DashBoard';
=======
import Register from './Landing/Register';
>>>>>>> 45c4a33035ba67a1a5176d480e66ce2938e900cb

export default class App extends React.Component {

    render(){
        return(
<<<<<<< HEAD
            <div>
                <Landing/>
                <DashBoard/>
            </div>
=======
            <main>
                <Landing/>
                <br/>
                <Register/>

            </main>


>>>>>>> 45c4a33035ba67a1a5176d480e66ce2938e900cb
        )
    }

}