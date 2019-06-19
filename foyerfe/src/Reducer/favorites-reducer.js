import{createFavorite,updateFavorite,removeFavorite} from "../Action/favorite-actions";
const initialFavoriteState = {
    favoritesArr:[],
};

export default (state = initialFavoriteState, {type, payload}) => {
    console.log(state.favoritesArr);
    let newState=state;
    switch(type) {
        case 'ADD-FAVORITE': //LOGIN
            // Connor - payload is a favorite
            return {
                ...newState,
                favorites: newState.favoritesArr.push(payload),
            };
        case 'REMOVE-FAVORITE': //yes
            return{
                ...newState,
                favorites: newState.favoritesArr.filter((favorite)=>{
                    return favorite.id===payload.id ? null : favorite;
                    }
                )
            };
        case 'MODIFY-FAVORITE': //change favorites
            return{
                ...newState,
                favorites: newState.favoritesArr.filter((favorite)=>{
                    return favorite.id===payload.id ? payload : favorite;
                })
            };
        default:
            return newState;
    }
};