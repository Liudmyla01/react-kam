import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import ava from '../../assets/img/ava.jpeg'
let Useres = (props) =>{
    if (props.users.length ===0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })

    // props.setUsers([{id:1,photoSrc:'https://funpick.ru/wp-content/uploads/2018/02/Ava-pats-12.jpg',followed:false, fullName: 'Liudmyla', status: 'Frontend devel', location:{country: 'Ukraine', city:'Nikolaev'}},
    // {id:2,photoSrc:'https://funpick.ru/wp-content/uploads/2018/02/Ava-pats-12.jpg',followed:true, fullName: 'Igor', status: 'machine master', location:{country: 'Ukraine', city:'Kiyev'}},
    // {id:3,photoSrc:'https://funpick.ru/wp-content/uploads/2018/02/Ava-pats-12.jpg',followed:false, fullName: 'Tom', status: 'waiter', location:{country: 'Romania', city:'Bicaz'}},
    // {id:4,photoSrc:'https://funpick.ru/wp-content/uploads/2018/02/Ava-pats-12.jpg',followed:true, fullName: 'Alex', status: 'Co-founder', location:{country: 'Ukraine', city:'Kiyev'}},
    // {id:5,photoSrc:'https://funpick.ru/wp-content/uploads/2018/02/Ava-pats-12.jpg',followed:false, fullName: 'Dima', status: 'guru', location:{country: 'Belarus', city:'Minsk'}},
    // ] )
}
    return <div>
       {
           props.users.map(u => {
             return <div  className={s.fontColor}>
                 <span>
                    <div><img src={u.photos.small != null ? u.photos.small : ava } alt="" className={s.uphoto} /></div>
                    <div> 
                        {u.followed 
                        ? <button onClick={()=>{ props.unfollow(u.id)}}>Unfollow</button> 
                        : <button onClick={()=>{ props.follow(u.id)}}>Follow</button>}
                        
                    </div>
                 </span>
                 <span>
                     <span>
                         <div>{u.name}</div>
                         <div>{u.status}</div>
                     </span>
                     <span>
                         {/* <div>{u.location.country}</div>
                         <div>{u.location.city}</div> */}
                     </span>
                 </span>
             </div>
           })
       }
    </div>
}

export default Useres;