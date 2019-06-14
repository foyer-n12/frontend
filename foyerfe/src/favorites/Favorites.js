import React, { Component } from 'react';
import Favorite from './Favorite.js'

export default class Favorites extends Component {
    constructor(props){
        super(props);
        this.state={
            favs:[{name:'reddit',link:'http://www.reddit.com/r/leagueoflegends'}], //each 'fav' stored within the array will contain an object that will have both a 'name' and 'link'
        }
    }

    renderFavorites() {
        if (this.state.favs.length === 0) {
            return (
                <div>
                    <h1>click here to add favorites</h1>
                </div>
            )
        } else {
            return (<div className={'favorites'}>
                        {this.state.favs.map(fav => {
                            return (
                                    <Favorite
                                        name={fav.name}
                                        link={fav.link}
                                    />
                            )
                        })}
                </div>
            )
        }
    };

    render(){
        return(
            <div>
                {this.renderFavorites()}
            </div>
        )
    }
};
