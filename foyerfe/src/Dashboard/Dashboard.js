import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar'
import DarkSky from "../Weather/Weather";
import Clock from "../Clock/Clock";
import SoundcloudDiv from "../Soundcloud/SoundcloudDiv"
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
       return this.props.logout();
    };

    render() {
        return(
            <div>
                <SearchBar/>
                <FavoritesDiv/>
                <NoteDashboard/>
                <Clock/>
                <DarkSky/>
                <SoundcloudDiv/>
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
    console.log(dispatch);
    return {
        logout: () => {
             dispatch(authActions.remove());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
