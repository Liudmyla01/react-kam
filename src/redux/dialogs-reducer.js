const UPDATE_NEW_MESS_BODY = 'UPDATE_NEW_MESS_BODY';
const SEND_MESSAGE = 'SEND_MESSEGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;

    switch(action.type){
        case UPDATE_NEW_MESS_BODY:
            stateCopy = {
                ...state,
                newMessageBody: action.body
            }
            return stateCopy;
        case SEND_MESSAGE:
            let body = stateCopy.newMessageBody;
            stateCopy = {
                ...state,
                newMessageBody: '',
                massage: [...state.messages, {id: 6, message: body}]//заменяет  stateCopy.messages.push({id: 6, message: body});

            }
           
            return stateCopy;
        default: return state;
    }
    
}
export const sendMessageCreator = () =>({ type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESS_BODY, body: body});
    
export default dialogsReducer