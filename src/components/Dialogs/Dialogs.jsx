import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthreator, requiredField} from "../../Utils/Validation/indexValid";


const Dialogs = (props) => {
    let state = props.messagesPage;


    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);

    let messagesElements = state.dialogsMessages.map(messag => <Message message={messag.message} key={messag.id} id={messag.id} />);

    //
    // let newMessageText = state.newMessagesText;
    // // let newMessageElement = React.createRef();


    // let onNewMessageChange = (e) => {
    //     let newBody = e.target.value;
    //     props.store.dispatch(updateNewMessageBodyreator(newBody))
    // }

    let addNewMessage = (e) =>{
        props.sendMessage(e.newMessagesText)
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
            <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

let maxLength = maxLengthreator(10);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[requiredField, maxLength]} name="newMessagesText"  placeholder="Enter your message"/>
            <div>
                <button >Add message</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;

