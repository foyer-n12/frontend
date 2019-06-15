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

    handleContent = (event) => this.setState({content: event.target.value});

    handleSubmit = async (event) =>{ // change to handleChange
        event.preventDefault();

        await this.addNote(this.state.content);
    };

    // handleClear = (note) =>
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
                    handleSubmit={this.handleSubmit}
                    handleRemoveNote={this.handleRemoteNote}
                    handleUpdateNote={this.handleUpdateNote}
                />
            </div>
        )
    }
}