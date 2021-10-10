import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://lh3.googleusercontent.com/proxy/_0TWl_V7Z9Xm9mDF--IWy1uEUML0Q7Ffan7ZwpRiwiyn1NZufXd3DjElnOGgA7no4Z8MKv8CzFQsvbmcsaaruw6khNNh46OcXsix9ELmDhHoafospy7jXCAtKpT_PhnK2jR3Dxp1EPfBfGQzlcGfHRu92vXbk4qhL5XKEL0lyqqS7gLtMHZaOvOrhG2n2_Yp' />
        { props.message }
          <div>
        <span>likes</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;