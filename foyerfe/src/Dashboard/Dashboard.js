import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar'
import FavoritesDiv from '../favorites/FavoritesDiv'

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
                <FavoritesDiv/>
            </div>
        )
    }
};