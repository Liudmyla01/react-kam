import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLenghtC, required } from '../../../utils/validators/validatore';
import { Textarea } from '../../common/FormsControl/FormsControl';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const maxLengch10 = maxLenghtC(10);

const AddNewPost = (props) =>{
    return  ( 
<form onSubmit={props.handleSubmit}>
<div>
    <Field component={Textarea} name={'newPostText'} 
              value={props.value} validate={[required, maxLengch10 ]}/>
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
