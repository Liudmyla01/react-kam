const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'ti lutchaya',
    profile: null  
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
        default:
             return state;
    }
  
}
export let addPostActionCreator = () => ({type: 'ADD-POST'}); //= return {type: 'ADD-POST'}
export let updateNewPostText = (text) => ({ type: 'UPDATE-NEW-POST-TEXT',  newText: text  });
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});   

export default profileReducer