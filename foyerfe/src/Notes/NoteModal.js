import React from 'react';

export default class NoteModal extends React.Component {
    render(){
        // const showHide = this.props.show ? 'note-modal display-block' : 'note-modal display-none';
        // const hideModal = this.props.hideModal;
        return(
            <div>
                <div className="note-modal">
                    {this.props.children}
                    {/*eventually change this to 2 pictures, a check and an X*/}
                    Are you sure you want to clear your note?
                    <button onClick={this.props.handleClear}>Yes</button>
                    <button onClick={this.props.hideModal}>No</button>
                </div>
            </div>
        );
    }
}