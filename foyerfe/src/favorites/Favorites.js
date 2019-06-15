import React, { Component } from 'react';
import Favorite from './Favorite.js'
import FavoritesForm from './FavoritesForm.js'

export default class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favs: [{name:'reddit',link:'http://www.reddit.com/r/leagueoflegends'}], //each 'fav' stored within the array will contain an object that will have both a 'name' and 'link'
        }
    }

    renderFavorites() {
        return (<div className={'favorites'}>
                {this.state.favs.map(fav => {
                    return (
                        <Favorite
                            favorite={fav}
                            handleRemove={this.handleDelete}
                            handleUpdate={this.handleUpdate}
                        />
                    )
                })}
            </div>
        )
    };


    handleDelete = fav => {
        this.setState(previousState => ({
            favs: previousState.favs.filter(currentFav => currentFav.name !== fav.name),
        }));
    };

    handleUpdate = favorite => {
        this.setState((previousState) => {
            return {
                favs: [...previousState.favs, {
                    ...favorite,
                }],
            }
        })
    };

    handleAdd = favorite => {
        this.setState((previousState) =>{
            return {
                expenses: [...previousState.favs, {...favorite,yes:'yes'}],
            }
        });
    };

    render() {
        return (
            <div>
                <FavoritesForm handleComplete={this.handleAdd}/>
                {this.renderFavorites()}
            </div>
        )
    };
}
