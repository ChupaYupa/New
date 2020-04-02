import React from 'react';
import { addSendMessageCreator, updateNewMessageBodyreator } from '../../Redux/dialogs-reduce';
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
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyreator(body));
        },
        sendMessage: () => {
            dispatch(addSendMessageCreator());
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispathToProps),
    withAuthRedirect )(Dialogs);
