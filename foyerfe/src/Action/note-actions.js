export function saveNote() {
    return {
        type: 'NOTE_SAVED',
        payload: {
            content,
        },
    }
}

export function clearNote() {
    return {
        type: 'NOTE_CLEAR',
        payload: id
    }
}

export function loadNote() {
    return {
        type: 'NOTE_LOAD',
    }
}