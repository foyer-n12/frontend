import React, { Component } from 'react';
import Modal from './Modal.js'
import FavoriteForm from "./FavoritesForm";

export default class Favorite extends Component {

    clickLink(){
        window.open(this.props.link,'_blank')
    }

    render() {
        const {handleUpdate}=this.props;
        const currentFavorite = this.props.favorite;
        const showModal = () => handleUpdate({...currentFavorite, editing:true});
        const hideModal = () => handleUpdate({...currentFavorite, editing:false});
        const handleUpdateFavorite = (updatedFavorite) =>{
            handleUpdateFavorite({...updatedFavorite,editing:false});
        };
        return(
            <div>
                <section className={'favorite'} onClick={this.clickLink.bind(this)}>
                    <h1>{currentFavorite.name}</h1>
                </section>
                <h1 onClick={showModal}>click for modal</h1>
                <Modal show={currentFavorite.editing} hideModal={hideModal}>
                    <FavoriteForm favorite={currentFavorite} handleComplete={handleUpdate}/>
                </Modal>
            </div>

        )
    }
};