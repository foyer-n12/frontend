const initialState = {note: ''};

export default (state = initialState, {type, payload}) => {

    let newState = state;
    const note = payload;
    if(type === 'UPDATE') {
            return {
                ...newState,
                note:payload,
            };
    } else {
        return newState;
    }
};