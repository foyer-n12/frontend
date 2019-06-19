import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

class AuthRedirect extends React.Component{
    // Jerome - this validation is exclusively for a better user experience
    render() {
        // Jerome - location is coming from the routing system and token is coming from the store
        const {location, token} = this.props;
        const {pathname} = location; // Jerome - pathname is our front-end route


        let destinationRoute = null; // Jerome - the final route I want to send to the user

        if(pathname === '/signup' || pathname === '/login' || pathname === '/' || pathname==='/Dashboard') {
            if(token) {
                console.log(pathname);

                // Jerome - the user is already logged in
                destinationRoute = '/Dashboard';
            }
        } else if(!token) {
            destinationRoute = '/';
        }
        console.log({destinationRoute});
        return(
            <div>
                {destinationRoute ? <Redirect to={destinationRoute}/> : undefined}
            </div>
        );
    }
}

// Jerome - this component can either get the token as props OR connect to the store
const mapStateToProps = state => ({
    token: state.token,
});

export default connect(mapStateToProps)(AuthRedirect);