import React from 'react';

const ProfileStatusWithHooks  = (props) => {

      return ( <div>
            {
            <div>
            <span onDoubleClick={activateEditMode.bind(this)}>{props.status}</span>
            </div>
        }
        {false &&
            <div>
            <input onChange={onStatusCha}  autoFocus={true} onBlur={} value={''}/>
            </div>
    }
        </div>
      )
    }


export default ProfileStatusWithHooks;