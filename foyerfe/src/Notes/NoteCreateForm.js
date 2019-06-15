import React from 'react';



const NoteCreateForm = ({handleContent, handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        {/*<input*/}
        {/*    type="text"*/}
        {/*    placeholder="Type some notes"/>*/}
        <textarea
            name="content"
            placeholder="type some notes"
            type="text"
            cols="30"
            rows="30"
            onChange={handleContent}
        />
        {/*<p><button type="submit">Sumbit</button></p>*/}
    </form>

);

export default NoteCreateForm;