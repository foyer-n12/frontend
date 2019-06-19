import React, { Component } from 'react';
import Modal from './Modal.js'
import FavoriteForm from "./FavoritesForm";

export default class Favorite extends Component {
    favorite;

    constructor(props){
        super(props)
        this.state={
            link:this.props.favorite.link||null,
        }
    }

    clickLink(){
        window.open(this.state.link,'_blank')
    }

    render() {
        return(
            <div>
                <section className={'favorite'} onClick={this.clickLink.bind(this)}>
                    <a style={{display: "table-cell"}} href={this.props.favorite.link} target="_blank">{this.props.favorite.name}</a>
                </section>
            </div>
        )
    }
};