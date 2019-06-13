import React, {Component} from 'react';

export default class Notes extends Component {
    constructor(props){
        super(props);
        this.state={
            noteText:''
        }
    }

    notePadChange = (content) => {
        let textContent = this.props.text;
        if (textContent === null) {return;}
        this.setState({noteText: content});
    };

    render() {

    let notePad = null;

    if (true){
        notePad = <notePad className="text-content"
                           placeholder={"Type some notes"}
                           value={this.state.notePadContent}
                           onChange={this.notePadChange}></notePad>
        }
        return(
            <div>
                {/*placeholder text field for now, til' we figure out the full field*/}
                <form>
                    <input
                        type="text"
                        placeholder="Type some notes"/>
                </form>
                <p>
                <notePad>Blank!</notePad>
                </p>
            </div>
        )
    }
}