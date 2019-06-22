import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar'
import DarkSky from "../Weather/Weather";
import Clock from "../Clock/Clock";
import SoundcloudDiv from "../Soundcloud/SoundcloudDiv"
import FavoritesDiv from '../favorites/FavoritesDiv'
import * as authActions from "../Action/auth-actions";
import NoteDashboard from "../Notes/NoteDashboard";
import {connect} from 'react-redux';
import './Dashboard.scss'
import equal from 'fast-deep-equal'
import superagent from 'superagent';


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
            <main>
                <div>
                    <header>
                        <button onClick={this.handleLogout}>LogOut</button>
                    </header>
                    <body>
                    <div id="left">
                        <Clock/>
                        <FavoritesDiv/>
                    </div>
                    <div id='middle'>
                        <SearchBar/>
                        <DarkSky/>
                        <SoundcloudDiv/>
                    </div>
                    <div id='right'>
                        <NoteDashboard/>
                    </div>
                    </body>
                </div>
            </main>
        )
    }
};

const mapStateToProps = state => {
    return {
        favorites:state.favoritesArr,
        soundcloud:state.soundcloud,
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
