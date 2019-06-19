const initialState = [];

export default (state = initialState, {type, payload}) => {

    const favorite = payload;
    let newState = state;
    switch(type) {
        case 'ADD-FAVORITE': //LOGIN
            // Connor - payload is a favorite
            newState.push(favorite);
            return newState;
        case 'REMOVE-FAVORITE': //yes
            newState.filter(currentfavorite=>{
                return currentfavorite !== favorite
            });
            return newState;
        case 'MODIFY-FAVORITE': //change favorites
            newState=newState.map(currentfavorite=>{
                if (currentfavorite.id===favorite.id){
                    currentfavorite.name=favorite.name;
                    currentfavorite.link=favorite.link;
                }
                return currentfavorite;
            });
            return newState;
        default:
            return newState;
    }
};