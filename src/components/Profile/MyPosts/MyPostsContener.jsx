import { connect } from 'react-redux';
import { updateNewPostText } from '../../../redux/profile-reducer';
import { addPostActionCreator } from '../../../redux/profile-reducer'; 
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) =>{
            let action = updateNewPostText(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

let MyPostsContener = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContener;