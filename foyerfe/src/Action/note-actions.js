export function update(note) {
    return {
        type: 'UPDATE',
        payload: {
            note,
        },
    }
}