import React, { Component } from 'react';

export default class Favorite extends Component {
    constructor(props){
        super(props);
        this.state={
            link:this.props.link,
            name:this.props.name,
        }
    }
    clickLink(){
        window.open(this.state.link,'_blank')
    }

    render() {
        return(
            <section className={'favorite'} onClick={this.clickLink.bind(this)}>
                <h1>{this.state.name}</h1>
                <p>'favorite div'</p>
            </section>
        )
    }
};