import { stopSubmit } from "redux-form";
import { usersAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA ';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data
            }
        
        default:
            return state
    }
}

export const setUserData = (userId, email, login,isAuth) => ({ type: SET_USER_DATA, data:{userId,email,login,isAuth} });
export const getAuthMe = ()=> (dispatch) =>{
    usersAPI.authMe().then(response => {
        if(response.data.resultCode === 0){
              let {id, login, email} = response.data.data;
              dispatch(setUserData(id,email,login, true))
             
          }
});
}

export const login = (email, password, rememberMe)=> (dispatch) =>{
    usersAPI.login(email, password, rememberMe).then(response => {
        if(response.data.resultCode === 0){
            dispatch(getAuthMe())
        }else{
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
              dispatch(stopSubmit('login', {_error:message}));
          }
});
}
export const logout = ()=> (dispatch) =>{
    usersAPI.logout().then(response => {
        if(response.data.resultCode === 0){
            dispatch(setUserData(null,null,null, false))
          }
});
}

export default authReducer;