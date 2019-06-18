import React from 'react';
import NoteDashboard from './NoteDashboard';




const NoteCreateForm = ({handleContent}) => (
    <form onChange={handleContent} id="noteForm">
        {/*from: https://stackoverflow.com/questions/43922508/clear-and-reset-form-input-fields/43922523*/}

        <textarea
            name="content"
            placeholder="type some notes"
            type="text"
            cols="30"
            rows="30"
        />


    </form>

);

export default NoteCreateForm;