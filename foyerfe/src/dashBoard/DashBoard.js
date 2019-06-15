import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar'
import Favorites from '../favorites/Favorites'

export default class DashBoard extends Component {
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

            </div>
        )
    }
};