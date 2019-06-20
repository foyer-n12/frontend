import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Demo from '../Weather/Getlocation';
import DarkSky from "../Weather/Weather";
import Clock from "../Clock/Clock";
import FavoritesDiv from '../favorites/FavoritesDiv'
import * as authActions from "../Action/auth-actions";
import NoteDashboard from "../Notes/NoteDashboard";
import {connect} from 'react-redux';



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
            <div>
                <SearchBar/>
                <FavoritesDiv/>
                <NoteDashboard/>
                <Clock/>
                <Demo/>
                <DarkSky/>
                <button onClick={this.handleLogout}>LogOut</button>
            </div>
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
