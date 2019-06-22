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
    };

    render(){
        const showOrHide = this.props.visBool ? 'modal display-block' : 'modal display-none';
        const hideModal = this.props.hideModal;
        return(
            <div className={showOrHide}>
                <div className="modal-main">
                        {this.renderForm()}
                </div>
                <button onClick={hideModal}/>
            </div>);
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

