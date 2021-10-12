import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContener from './MyPosts/MyPostsContener';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContener store={props.store} />
        </div>
    )
}

export default Profile;