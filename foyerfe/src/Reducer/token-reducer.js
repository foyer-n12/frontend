const initialState = null;

export default (state = initialState, {type, payload}) => {
    //Jerome - payload goes here
    const token = payload;
    switch(type) {
        case 'TOKEN_SET': //LOGIN
            // Jerome - payload is a token
            return token;
        case 'TOKEN_REMOVE': //LOGOUT
            return null;
        default:
            return state;
    }
};