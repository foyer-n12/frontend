import superagent from 'superagent';
import uuid from 'uuid';

export const createFavorite = (favorite) =>{
    return{
        type:'ADD-FAVORITE',
        payload:{
            id:uuid(),
            name:favorite.name,
            link:favorite.link,
            created:new Date(),
        }
    }
};

export const updateFavorite = (favorite)=>{
    return{
        type: 'MODIFY-FAVORITE',
        payload: favorite,
    }
};

export const removeFavorite = (favorite) =>{
    return {
        type: 'REMOVE-FAVORITE',
        payload:favorite,
    }
};