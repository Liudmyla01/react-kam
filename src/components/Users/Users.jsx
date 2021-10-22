import React from 'react'
import s from './Users.module.css';
import ava from '../../assets/img/ava.jpeg'

let Users = (props) =>{
    let pagesCount = props.totalUsersCount/props.pageSize;//сколько страниц будет отображать пагинац
  
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)  
            
        }
    return <div>
    <div>
        {pages.map(p => {
           return <span className={props.currentPage === p && s.numPage} 
           onClick={(e)=>{
               props.onPageChange(p)
            }}> {p}</span> 
        })}
    </div>
  {
      props.users.map(u => {
        return <div  className={s.fontColor}>
            <span>
               <div><img src={u.photos.small != null ? u.photos.small : ava } alt="" className={s.uphoto} /></div>
               <div> 
                   {u.followed 
                   ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> 
                   : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                   
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
export default Users;