import{saveNote, clearNote, loadNote} from "../Action/note-actions";
const initialNoteState = {
    content:'',
};

export default (state = initialNoteState, {type, payload}) => {
    console.log(state.content);
    // const note = payload;
    let newState = state;
    switch(type) {
        case 'NOTE_SAVED':
            return {
                ...newState.content = payload};
        case 'NOTE_CLEAR':
            return {
                ...newState,
                notes: newState.content === '',
            };
        case 'NOTE_LOAD':
            return {...newState};
        default:
            return newState;
    }
};