import React from 'react';

export default class SoundCloudWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            soundcloud: ''
        };
    }


    render() {
        return (
            <div>
                <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/333808909&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>
        )
    };
}