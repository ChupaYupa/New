import React from 'react';
import { addSendMessageCreator } from '../../Redux/dialogs-reduce';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from "../HOC/withAuthComponent";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispathToProps = (dispatch) => {
    return {
        sendMessage: (newMessagesText) => {
            dispatch(addSendMessageCreator(newMessagesText));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispathToProps),
    withAuthRedirect )(Dialogs);
