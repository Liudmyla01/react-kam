import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const AddNewPost = (props) =>{
    return  ( 
<form onSubmit={props.handleSubmit}>
<div>
    <Field component={'textarea'} name={'newPostText'} 
              value={props.value}/>
</div>
<div>
    <button>Add post</button>
</div>
</form>
)
}

const NewPostReduxForm = reduxForm({
    form: "ProfileAddNewPOstForm"
})(AddNewPost)


const MyPosts = (props) => {
    
    let postsElements =
    props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);
    
    const onAddPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
          <NewPostReduxForm onSubmit= {onAddPost} />
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
