import React from 'react';
import {connect} from 'react-redux';
import * as noteActions from '../Action/note-actions';
// import NoteDashboard from './NoteDashboard';




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
//
// const mapDispatchToProps = dispatch => ({
//     create: notes => {return(dispatch(noteActions.saveNote(notes)));},
//     delete: notes => {return(dispatch(noteActions.clearNote(notes)));}
// clearNote
// loadNote
// });
export default NoteCreateForm;

// export default connect(null, mapDispatchToProps)(NoteCreateForm)