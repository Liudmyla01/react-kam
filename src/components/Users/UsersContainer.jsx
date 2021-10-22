import React from 'react'
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users'

let mapStateToProps = (state) =>{
    return{
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserCpunt: state.userPage.totalUserCpunt,
        currentPage: state.userPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userID) =>{
            dispatch(followAC(userID))
        },
        unfollow: (userID) =>{
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users ))
        },
        setCurrentPage: (pageNum) =>{
            dispatch(setCurrentPageAC(pageNum ))
        },
        setTotalUsersCount: (totalCount) =>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Users);