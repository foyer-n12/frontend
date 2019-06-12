import React, { Component } from 'react';

export default class DashBoard extends Component {
    constructor(props){
        super(props);
        this.state={
            query:'',
        }
    }

    handleSubmit=event=>{
        event.preventDefault();
        console.log(event.target);
        let search = this.state.query.replace(' ','+');
        window.open(`http://google.com/search?q=${search}`,'_blank')
    };

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input
                    type ='text'
                    name='query'
                    value={this.state.query}
                    onChange={this.handleChange}
                />
                <button type='submit'> Google </button>
            </form>
            </div>
    )
    }
};