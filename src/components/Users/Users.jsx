import React from 'react';
import s from './Users.module.css';

let Useres = (props) =>{

    return <div>
       {
           props.users.map(u => {
             return <div  className={s.fontColor}>
                 <span>
                    <div><img src={u.photoSrc} alt="" className={s.uphoto} /></div>
                    <div>
                        {u.followed 
                        ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> 
                        : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                        
                    </div>
                 </span>
                 <span>
                     <span>
                         <div>{u.fuulName}</div>
                         <div>{u.status}</div>
                     </span>
                     <span>
                         <div>{u.location.country}</div>
                         <div>{u.location.city}</div>
                     </span>
                 </span>
             </div>
           })
       }
    </div>
}

export default Useres;