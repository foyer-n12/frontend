import React, { Component } from 'react';

export default class Favorite extends Component {
    constructor(props){
        super(props)
        this.state={
            link:`http://www.${this.props.favorite.link.substring(this.props.favorite.link.indexOf('www.')+4,this.props.favorite.link.length)}`||null,
        }
    }

    render() {
        return(
            <div>
                <section className={'favorite'}>
                    <a href={this.state.link} target="_blank">{this.props.favorite.name}</a>
                </section>
            </div>
        )
    }
};