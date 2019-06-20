import React from 'react';
import NoteCreateForm from './NoteCreateForm';
import NoteModal from './NoteModal'
import './Note.scss'

export default class NoteDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            isModalShowing: false
        };
    }

    handleContent = async (event) => {
        this.setState({content: event.target.value});
        // console.log(this.state.content);
    };

    showModal = (event) => {
        event.preventDefault();
        this.setState({isModalShowing: true})
    };

    hideModal = (event) => {
        event.preventDefault();
        this.setState({isModalShowing: false})
    };

    handleClear = (event) => {
        event.preventDefault();
        document.getElementById("noteForm").reset();
        // probably shouldn't manipulate the DOM with React like this.
        this.setState({content: ''});
        console.log(this.state.content);
        this.setState({isModalShowing: false})
    };

    handlePrint = (event) => {
        event.preventDefault();
        console.log(this.state.content);
    };

    render(){
        return(
            <div>
                <NoteCreateForm
                    notes={this.state.notes}
                    handleContent={this.handleContent}
                    handleClear={this.handleClear}
                />
                {this.state.isModalShowing && (
                <NoteModal
                    handleClear={this.handleClear}
                    hideModal={this.hideModal}
                />
                )}
                <button onClick={this.showModal}>Clear</button>
                <button onClick={this.handlePrint}>Print</button>

            </div>
        )
    }
}