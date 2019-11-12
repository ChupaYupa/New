import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
</div>
}

const Message = (props) => {
    return <div className={s.dialogs}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Sveta" id="2"/>
                <DialogItem name="Sasha" id="3"/>
                <DialogItem name="Valera" id="4"/>
                <DialogItem name="Artem" id="5"/>
            </div>        
        
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Goodbye"/>
            </div>
        </div>
        )
}
export default Dialogs;