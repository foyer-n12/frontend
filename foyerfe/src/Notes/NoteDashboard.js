import React from 'react';
import NoteCreateForm from "./NoteCreateForm";
import uuidv1 from 'uuid/v1';

export default class NoteDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            content: ''
        };
    }

    addNote = (content) => {
        let id = uuidv1();
        this.setState(prev => ({
            notes: [...prev.notes,{content, id}],
        }));
    };

    handleContent = async (event) => {
        this.setState({content: event.target.value});
        // console.log(this.state.content);
    };

    handleRemoteNote = (note) => {
        this.setState(previousState => ({
            notes: previousState.notes.filter(currentNotes => currentNotes.id !== note.id),
        }));
    };

    handleUpdateNote = (note) =>
        this.setState((previousState) => {
            const updateNotes = previousState.notes.map(currentNote =>
                note.id === currentNote.id ? note :currentNote
            );
        return {notes: updateNotes };
    });

    render(){
        return(
            <div>
                <NoteCreateForm
                    notes={this.state.notes}
                    handleContent={this.handleContent}
                    handleClear={this.handleClear}
                    handleRemoveNote={this.handleRemoteNote}
                    handleUpdateNote={this.handleUpdateNote}
                />

            </div>
        )
    }
}