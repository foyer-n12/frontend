import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Location from '../Weather/Getlocation';
// import DarkSky from "../Weather/Weather";
import Clock from "../Clock/Clock";
import FavoritesDiv from '../favorites/FavoritesDiv'
import * as authActions from "../Action/auth-actions";
import NoteDashboard from "../Notes/NoteDashboard";
import {connect} from 'react-redux';
import "./Dashboard.scss";


export class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            query:'',
        }
    }

    handleLogout = () => {
        this.props.logout();
    };

    render() {
        return(
            <main>
              <header>
                <button onClick={this.handleLogout}>LogOut</button>
              </header>
              <body>
                <FavoritesDiv/>
                <Clock/>
                <Location/>
                <NoteDashboard/>
              </body>
            </main>
        )
    }
};

const mapStateToProps = state => {
    return {
        authActions: state.token,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
             dispatch(authActions.remove());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
