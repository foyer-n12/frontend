import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar'
import Favorites from '../favorites/Favorites'
import NoteDashboard from "../Notes/NoteDashboard";
import DarkSky from "../Weather/Weather";
import Clock from "../Clock/Clock";

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            query:'',
        }
    }

    render() {
        return(
            <div>
                <SearchBar/>
                <Favorites/>
                <NoteDashboard/>
                <Clock/>
                <DarkSky/>
            </div>
        )
    }
};