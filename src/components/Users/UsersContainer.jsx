import React from 'react'
import { connect } from 'react-redux';
import { followAC, setUsersAC } from '../../redux/users-reducer';
import Users from './Users'

let mapStateToProps = (state) =>{
    return{
        users: state.userPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userID) =>{
            dispatch(followAC(userID))
        },
        unfollow: (userID) =>{
            dispatch(followAC(userID))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users ))
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Users);