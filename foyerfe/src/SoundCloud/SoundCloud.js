import React from 'react';

export default class SoundCloudWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            soundCloudLink: '',
            linkConcat: ''
        };
    }

    linkPut = (event) => {
        event.preventDefault();
        this.setState({soundCloudLink: event.target.value});
        this.setState({linkConcat : "https://w.soundcloud.com/player/?url=https%3A//" + this.state.soundCloudLink + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"});
    };

    linkTest = (soundCloudLink) => {

        if(typeof soundCloudLink === 'string'){
            console.log("link is a string");
        } else {
            return false;
        }
        if(soundCloudLink.charAt(32) === '?'){
            console.log('32nd char is a ?');
        } else {
            return false;
        }

        if(soundCloudLink.charAt(81) === '&'){
            console.log('82nd char is an &');
        } else {
            return false;
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.linkPut}>
                    <input type="text" placeholder="SoundCloud embed goes here"/>
                    <button type="submit">Submit</button>
                </form>
                <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
 src={this.linkConcat}></iframe>
            </div>
        )
    };
}