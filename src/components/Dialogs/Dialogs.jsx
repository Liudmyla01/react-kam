import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageFormRedux from './AddMessegeForm';


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message}/> );
    let newMessageBody = state.newMessageBody;
    
    
    let addNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}


export default Dialogs;