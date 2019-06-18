import React from 'react';

export default class NoteModal extends React.Component {
    render(){
        const showHide = this.props.show ? 'note-modal display-block' : 'note-modal display-none';
        const hideModal = this.props.hideModal;
        return(
            <div className={showHide}>
                <div className="note-modal">
                    {this.props.children}
                    <button onClick={this.props.hideModal}>Button</button>
                </div>
            </div>
        );
    }
}