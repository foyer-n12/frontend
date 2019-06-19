import superagent from 'superagent';
import uuid from 'uuid';

export const createFavorite = (favorite) =>{
    return{
        type:'ADD_FAVORITE',
        payload:{
            id:uuid(),
            name:favorite.name,
            link:favorite.link,
            created:new Date,
        }
    }
};

export const updateFavorite = (favorite)=>{
    return{
        type: 'MODIFY_FAVORITE',
        payload: favorite,
    }
};

export const removeFavorite = (favorite) =>{
    return {
        type: 'REMOVE_FAVORITE'
    }
};