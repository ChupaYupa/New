import React from 'react';
import { addSendMessageCreator, updateNewMessageBodyreator } from '../../Redux/dialogs-reduce';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

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
const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);

export default DialogsContainer;