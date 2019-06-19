import React from 'react';

import FavoritesForm from './FavoritesForm'
import './Modal.scss';
import * as favoritesActions from "../Action/favorite-actions";
import {connect} from "react-redux";




class Modal extends React.Component{

    renderForms() {
        console.log('rendering forms');
        return(
            this.props.favorites.map((fav) => {
                    return (
                        <li key={fav.id}>
                            <FavoritesForm favorite={fav}/>
                        </li>
                    )
                }
            )
        )
    };

    handleAdd=(event)=>{
        event.preventDefault();
        this.props.create({name: event.target.name, link: event.target.link});
    };

    handleUpdate=(event)=>{
        event.preventDefault();
        this.props.update({name: event.target.name, link: event.target.link});
    };

    handleDelete=(event)=>{
        event.preventDefault();
        this.props.delete({name: event.target.name, link: event.target.link});
    };

    render(){
        const showOrHide = this.props.visBool ? 'modal display-block' : 'modal display-none';
        const hideModal = this.props.hideModal;
        return(
            <div className={showOrHide}>
                <div className="modal-main">
                    <ul>
                        <li>
                            <FavoritesForm/>
                        </li>
                        {this.renderForms()}
                    </ul>
                </div>
                <button onClick={hideModal}/>
            </div>);
    }
}


function mapStateToProps(state){
    console.log(state);
    return {favorites: state.favorites.favoritesArr};
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


export default connect(mapStateToProps,mapDispatchToProps)(Modal);

