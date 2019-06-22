import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar'
import DarkSky from "../Weather/Weather";
import Clock from "../Clock/Clock";
import SoundcloudDiv from "../Soundcloud/SoundcloudDiv"
import FavoritesDiv from '../favorites/FavoritesDiv'
import * as authActions from "../Action/auth-actions";
import NoteDashboard from "../Notes/NoteDashboard";
import { Button } from 'reactstrap';

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
                        <Button onClick={this.handleLogout}>Log Out</Button>
                    </header>
                    <body>
                    <section id="left">
                        <div>
                            <Clock/>
                        </div>
                        <div>
                            <FavoritesDiv/>
                        </div>
                    </section>
                    <section id='middle'>
                        <div>
                            <SearchBar/>
                        </div>
                        <div>
                            <DarkSky/>
                        </div>
                        <div>
                            <SoundcloudDiv/>
                        </div>
                    </section>
                    <section id='right'>
                        <NoteDashboard/>
                    </section>
                    </body>
                </div>
            </main>
        )
    }

    componentDidUpdate(prevProps){
        console.log('componentDidUpdate');
        if(!equal(prevProps, this.props)){
            console.log('STATE CHANGED');
            console.log('favorites'+this.props.favorites);
            console.log('soundcloud'+this.props.soundcloud);
        }
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
