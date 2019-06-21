const initialSoundcloudState = {
    soundcloudLink:null,
};

export default (state = initialSoundcloudState, {type, payload}) => {
    //Connor - payload goes here
    const soundcloud = payload;
    const newState = state;
    if (type === 'LINK-SET') {
        return {
            ...newState, soundcloudLink:soundcloud,
        };
    } else {
        return newState;
    }
};