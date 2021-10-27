import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>  
    }
    // console.log(props);
    return (
        <div>
            <div>
                <img id={s.newImg}
                    src='https://i.pinimg.com/originals/c4/47/d3/c447d32be251e260e1c66e9d1ca09b2d.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.aboutMe}>About me: {props.profile.aboutMe}</div>
               
                <img src={props.profile.photos.large } alt="" />
                <span>Contact : {props.profile.contacts.facebook}</span>
            </div>
        </div>
    )
}

export default ProfileInfo;