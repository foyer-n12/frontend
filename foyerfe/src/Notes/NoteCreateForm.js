import React from 'react';



const NoteCreateForm = ({handleContent}) => (
    <form onChange={handleContent}>
        {/*<input*/}
        {/*    type="text"*/}
        {/*    placeholder="Type some notes"/>*/}
        <textarea
            name="content"
            placeholder="type some notes"
            type="text"
            cols="30"
            rows="30"
        />
        {/*<p><button type="submit">Sumbit</button></p>*/}
    </form>

);

export default NoteCreateForm;