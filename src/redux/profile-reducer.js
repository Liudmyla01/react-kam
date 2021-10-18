let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'ti lutchaya'
};



const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case "ADD-POST":{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state}
            stateCopy.posts = [...stateCopy.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;}
        case "UPDATE-NEW-POST-TEXT":{
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;}
        default:
             return state;
    }
  
}
export let addPostActionCreator = () => ({type: 'ADD-POST'}); //= return {type: 'ADD-POST'}
export let updateNewPostText = (text) => ({
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    });
    

export default profileReducer