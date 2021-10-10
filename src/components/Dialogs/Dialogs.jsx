import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/> );
    let newMessageBody = props.state.newMessageBody;

    let onSendMessageClick = () => {props.store.dispatch(sendMessageCreator())}
    let onNewMessChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <div className="newMessTextarea">
                <div><textarea value={newMessageBody}
                               onChange={onNewMessChange}
                                placeholder='Enter your mess'> </textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
                
            </div>
        </div>
    )
}

export default Dialogs;