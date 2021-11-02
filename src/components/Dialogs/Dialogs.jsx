import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from 'react-router';

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message}/> );
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body); 
    }
    
    if(props.isAuth == false) return <Redirect to={'/login'}/>

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