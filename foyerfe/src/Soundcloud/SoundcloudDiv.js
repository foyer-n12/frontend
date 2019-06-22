import React, { Component } from 'react';
import { connect } from 'react-redux'
import Modal from './SoundcloudModal.js'

class SoundcloudDiv extends Component {
    constructor(props){
        super(props);
        this.state={
            editing:false,
        }
    }

    hideModal(){
        this.setState(previousState=>{return {...previousState, editing:false}})
    }

    showModal(){
        this.setState(previousState=>{return {...previousState, editing:true}});
    }

    showSoundcloud() {
        if (this.props.soundcloud) {
            let indexStart=this.props.soundcloud.indexOf('src');
            let parsed= this.props.soundcloud.substring(indexStart+5, this.props.soundcloud.length-11);
            /*
        *
        * TODO: parse out the soundcloud code given by our user to make it render and maintain safety.
        * */
            return(
                <iframe
                    title={'Soundcloud-Playlist'}
                    width="100%"
                    height="450"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={parsed}
                />
            )
        }else{
            return(
                <div onClick={this.showModal.bind(this)}>
                    <h1>click here to add a soundcloud playlist.</h1>
                </div>
            )
        }
    };

    render(){
        return (
            <div className='soundcloudDiv'>
                <Modal
                    hideModal={this.hideModal.bind(this)}
                    visBool={this.state.editing}/>
                {this.showSoundcloud()}
            </div>
        )
    };
}

function mapStateToProps(state){
    return {soundcloud: state.soundcloud.soundcloudLink};
}

export default connect(mapStateToProps,null)(SoundcloudDiv);