import React, { Component } from 'react';
import { connect } from 'react-redux'
import Favorite from './Favorite.js'
import Modal from './Modal.js'

import * as favoritesActions from '../Action/favorite-actions';

class FavoritesDiv extends Component {

    constructor(props){
        super(props);
        this.state={
            editing:false,
        }
    }

    hideModal(){
        this.setState(previousState=>{return {...previousState, editing:false}})
    }

    showModal(){
        this.setState(previousState=>{return {...previousState, editing:true}});
    }

    renderFavorites() {
        if (this.props.favorites.length>0) {
            return (<div className={'TODO_BETTER_CLASS_NAME'}>
                    <div onClick={this.showModal.bind(this)}>
                        <img src='../assets/edit.jpg' alt='edit'/>
                    </div>
                    {this.props.favorites.map(fav => {
                        return (
                            <Favorite
                                favorite={fav}
                            />
                        )
                    })
                    }
                </div>
            )
        }else{
            return(
                <div onClick={this.showModal.bind(this)}>
                    <h1>click here to add favorites.</h1>
                </div>
            )
        }
    };

    render(){
        return (
            <div className='favoritesDiv'>
                <Modal
                    hideModal={this.hideModal.bind(this)}
                    showModal={this.showModal.bind(this)}
                    visBool={this.state.editing}/>
                {this.renderFavorites()}
            </div>
        )
    };
}

function mapStateToProps(state){
    return {favorites: state.favorites.favoritesArr};
}

export default connect(mapStateToProps,null)(FavoritesDiv);