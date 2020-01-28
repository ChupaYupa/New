import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { addSendMessageCreator, updateNewMessageBodyreator } from '../../Redux/dialogs-reduce';


const Dialogs = (props) => {
    let state = props.messagesPage;


    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);

    let messagesElements = state.dialogsMessages.map(messag => <Message message={messag.message} key={messag.id} id={messag.id} />);


    let newMessageText = state.newMessagesText;
    // let newMessageElement = React.createRef();
    let addSend = () => {
        props.sendMessage();
        // props.store.dispatch(addSendMessageCreator());
    }
    // let onNewMessageChange = (e) => {
    //     let newBody = e.target.value;
    //     props.store.dispatch(updateNewMessageBodyreator(newBody))
    // }
    let onNewMessage = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
        // props.store.dispatch(updateNewMessageBodyreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.textarea}>
                <textarea value={newMessageText} onChange={onNewMessage} placeholder='Enter your message'></textarea>
            </div>
            <div>
                <button onClick={addSend}>Add message</button>
            </div>
        </div>
    )
}
export default Dialogs;