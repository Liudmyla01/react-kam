import React from 'react';
import { updateNewPostText } from '../../../redux/profile-reducer';
import { addPostActionCreator } from '../../../redux/profile-reducer'; 
import MyPosts from './MyPosts';


const MyPostsContener = (props) => {
    let state = props.store.getState();

    let addPost = () => {
     props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostText(text);
        props.store.dispatch(action);
    }
    return (
        <MyPosts updateNewPostText ={onPostChange}
                 addPost = {addPost}
                 posts = {state.profilePage.posts}
                 newPostText = {state.profilePage.newPostText }/> 
    )
}

export default MyPostsContener;