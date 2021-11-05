import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sideBar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import  thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
const { createStore, combineReducers, applyMiddleware } = require("redux");


let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    userPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

//applyMiddleware(thunkMiddleware) - для внедрения thunk
let store = createStore(redusers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store