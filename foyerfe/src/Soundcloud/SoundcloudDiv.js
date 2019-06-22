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
            this.props.soundcloud.indexOf('src');
            let parsed= this.props.soundcloud.substring(this.props.soundcloud.indexOf('src')+4,this.props.soundcloud.indexOf('&color'));
            /*
        *
        * TODO: parse out the soundcloud code given by our user to make it render and maintain safety.
        * */
            return(
                <iframe
                    title={'Soundcloud-Playlist'}
                    margin-top="-20%"
                    width="100%"
                    height="450"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={`${parsed}&color=%23ff5500&auto_play=true&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true>`}
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