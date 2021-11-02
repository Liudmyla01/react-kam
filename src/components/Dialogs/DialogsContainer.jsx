import React from 'react';
import Dialogs from "./Dialogs";
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRederect';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
       
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) =>{
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

let AuthRedirctComponent = withAuthRedirect(Dialogs)

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirctComponent);

export default DialogsContainer ;