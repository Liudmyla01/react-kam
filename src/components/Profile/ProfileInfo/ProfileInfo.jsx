import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img id={s.newImg}
                    src='https://i.pinimg.com/originals/c4/47/d3/c447d32be251e260e1c66e9d1ca09b2d.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;