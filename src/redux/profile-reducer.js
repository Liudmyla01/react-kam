import { usersAPI } from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS= 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'ti lutchaya',
    profile: null,
    status:""  
};



const profileReducer = (state = initialState, action) => {
    
    switch(action.type){
        case "ADD-POST":{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts:[...state .posts, newPost],
                newPostText:''
            }
        }
        case "UPDATE-NEW-POST-TEXT":{
            return {
                ...state,
                newPostText: action.newText
            }
        } 
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            }
        } 
        case SET_STATUS:{
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
        }
        
    }
    export let addPostActionCreator = () => ({type: 'ADD-POST'}); //= return {type: 'ADD-POST'}
    export let updateNewPostText = (text) => ({ type: 'UPDATE-NEW-POST-TEXT',  newText: text  });
    export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});   
    export let setStatus = (status) => ({type: SET_STATUS, status}); 
    export let getUserProfile = (userId) => (dispatch) => {
        usersAPI.profile(userId).then(response => {
            dispatch(setUserProfile(response.data));  
        });}

export const getStatus = (userId) => (dispatch) => {
    usersAPI.getStatus(userId)
    .then(response => (
        dispatch(setStatus(response.data))
    ))
};
export const updateStatus = (status) => (dispatch) => {
    usersAPI.updateStatus(status)
    .then(response => {
        if(response.data.resultCode === 0){
        dispatch(setStatus(status))
    }
                })
}


export default profileReducer