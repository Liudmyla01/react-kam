import React from 'react';
import Dialogs from "./Dialogs";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage; 

    let onSendMessageClick = () => {props.store.dispatch(sendMessageCreator())}
    let onNewMessChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return <Dialogs updateNewMessageBody = {onNewMessChange} 
                    sendMessage ={onSendMessageClick}
                    dialogsPage = {state }/>
}

export default DialogsContainer ;