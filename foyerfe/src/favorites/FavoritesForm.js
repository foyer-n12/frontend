import React from 'react';
import {connect} from "react-redux";
import * as favoritesActions from "../Action/favorite-actions";

class FavoritesForm extends React.Component {

    constructor(props){
        super(props);
        if (this.props.favorite){
            this.state=this.props.favorite;
        } else {
            this.state = {
                name:'',
                link:'',
            };
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value,
        });
    };

    handleSubmit = event =>{
        event.preventDefault();
        if (this.props.favorite){
            this.props.update(this.state)
        }else{
            this.props.create({name: event.target.name.value, link: event.target.link.value});
            this.setState({
                name:'',
                link:'',
            }
            )
        }


    };

    render(){
        const buttonText = this.props.favorite ? 'Update' : 'Add';
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input
                    type={'text'}
                    name={'name'}
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder={'Name'}/>
                <input
                    type={'text'}
                    name={'link'}
                    value={this.state.link}
                    onChange={this.handleChange}
                    placeholder={'Link'}/>
                <button type={'submit'}>{buttonText} Favorite</button>
            </form>
        );
    }
}

const mapDispatchToProps=dispatch=>({
    create: favorite=>{
        return(dispatch(favoritesActions.createFavorite(favorite)));
    },
    update:favorite=>{
        return(dispatch(favoritesActions.updateFavorite(favorite)));
    },
    delete:favorite=>{
        return(dispatch(favoritesActions.removeFavorite(favorite)));
    },
});

export default connect(null, mapDispatchToProps)(FavoritesForm);