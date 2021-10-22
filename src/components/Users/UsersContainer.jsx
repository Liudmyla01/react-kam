import React from 'react'
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';


class UsersContainer extends React.Component {
    
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount)       
    })

    }
    onPageChange = (pageNum) =>{
        this.props.setCurrentPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
        .then(response => {
                    this.props.setUsers(response.data.items) 
                            })
            }

    render(){
        
        return <Users totalUsersCount={this.props.totalUserCpunt}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChange = {this.onPageChange}
                        users = {this.props.users }
                        follow = {this.props.follow }
                        unfollow = {this.props.unfollow }
                        /> 
}
     
}
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
 
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);