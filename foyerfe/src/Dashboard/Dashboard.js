import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar'
import Favorites from '../favorites/Favorites'
import NoteDashboard from "../Notes/NoteDashboard";

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
            </div>
        )
    }
};