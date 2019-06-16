import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar'
import Favorites from '../favorites/Favorites'
import * as authActions from "../Action/auth-actions";

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
                <Favorites/>
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
