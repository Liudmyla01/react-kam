import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://telemetr.me/photos/9b9c2f98bbcaa5a43b89b317280d6b26.jpg' />
        { props.message }
          <div>
        <span>likes</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;