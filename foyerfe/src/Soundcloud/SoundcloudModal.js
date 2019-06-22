import React from 'react';
import './modal.scss';
import * as soundcloudActions from "../Action/soundcloud-actions";
import {connect} from "react-redux";

class Modal extends React.Component{

    constructor(props){
        super(props);
            this.state={
                link:this.props.soundcloudLink,
            }
    }

    renderForm() {
        return(
            <form onSubmit={this.handleComplete}>
                <input
                    type={'text'}
                    name={'link'}
                    value={this.state.link}
                    onChange={this.handleChange}
                    placeholder={'Soundcloud Link'}/>
                <button onClick={this.props.hideModal} type={'submit'}>Save</button>
            </form>
        )
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value,
        });
    };

    handleComplete=(event)=>{
        event.preventDefault();
        this.props.update(this.state.link);
        this.props.hideModal();
    };

    render(){
        const showOrHide = this.props.visBool ? 'modal display-block' : 'modal display-none';
        const hideModal = this.props.hideModal;
        return(
            <section className={showOrHide}>
                <section className="modal-main">
                    <p>
                        To get an embed code for your track or playlist,
                        click the 'Share' button below the waveform and an overlay will appear.
                        Click on the embed tab to view what options you have to embed your player.
                        Copy-paste the embed code from 'Code & preview'.
                    </p>
                    {this.renderForm()}
                </section>
                <button onClick={hideModal}/>
            </section>);
    }
}


function mapStateToProps(state){
    return {soundcloudLink: state.soundcloudLink};
}

const mapDispatchToProps=dispatch=>({
    update:soundcloudLink=>{
        return(dispatch(soundcloudActions.set(soundcloudLink)));
    },
});


export default connect(mapStateToProps,mapDispatchToProps)(Modal);

