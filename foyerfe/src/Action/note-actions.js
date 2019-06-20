export const saveNote = (note) => {
    return {
        type: 'NOTE_SAVED',
        payload: {
            // id:uuid(), is this needed here?
            content:note.content,
            modified: new Date,
        },
    }
};

export const clearNote = (note) => {
    return {
        type: 'NOTE_CLEAR',
    }
};

export function loadNote(note) {
    return {
        type: 'NOTE_LOAD',
        payload: {
            content:note.content,
            modified: new Date,
        }
    }
}