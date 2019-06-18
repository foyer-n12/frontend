import React from 'react';

const handleClear = (note) => {
    // this.preventDefault();
    document.getElementById("noteForm").reset(); // probably shouldn't manipulate the DOM with React like this.
    this.setState({content: ''});
    console.log(this.state.content);
};

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
        <button onClick={handleClear}>Clear</button>
    </form>

);

export default NoteCreateForm;