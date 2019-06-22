import React, { Component } from 'react';
import './Favorites.scss'

export default class Favorite extends Component {
    constructor(props){
        super(props);
        this.state={
            link:`http://www.${this.props.favorite.link.substring(this.props.favorite.link.indexOf('www.')+4,this.props.favorite.link.length)}`||null,
        }
    }

    click(){
        window.open(this.state.link,'_blank');
    }



    render() {
        return(
            <div className={'favorite'}>
                 <button type='button' onClick={this.click.bind(this)}>{this.props.name}</button>
            </div>
        )
    }

};