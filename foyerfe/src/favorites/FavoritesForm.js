import React from 'react';

export default class FavoriteForm extends React.Component {

    constructor(props){
        super(props);
        if (this.props.favorite){
            this.state=this.props.favorite;
        } else {
            this.state = {
                name:'',
                link:''
            };
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value,
        });
    };

    handleSubmit = event =>{
        event.preventDefault();
        this.props.handleComplete(this.state);
    }

    render(){
        const buttonText = this.props.favorite ? 'Update' : 'Add';
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type={'text'}
                    name={'name'}
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder={'Name'}/>
                <input
                    type={'text'}
                    name={'link'}
                    value={this.state.link}
                    onChange={this.handleChange}
                    placeholder={'Link'}/>
                <button type={'submit'}>{buttonText} Favorite</button>
            </form>
        );
    }
}