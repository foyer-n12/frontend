const initialState = null;

export default (state = initialState, {type, payload}) => {

    const note = payload;
    switch(type) {
        case 'NOTE_SAVED':
            return {...state};
        case 'NOTE_CLEAR':
            return null;
        case 'NOTE_LOAD':
            return {...state};
        default:
            return state;
    }
};