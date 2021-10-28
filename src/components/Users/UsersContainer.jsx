import React from 'react'
import { connect } from 'react-redux';
import { follow, setCurrentPage, toggleIsFeatching, setTotalUsersCount, setUsers, unfollow, toggleIsFollowingProgress } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {
    
    componentDidMount(){
        this.props.toggleIsFeatching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                    this.props.toggleIsFeatching(false );
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount)       
    })

    }
    onPageChange = (pageNum) =>{
        this.props.setCurrentPage(pageNum);
        this.props.toggleIsFeatching (true);
        usersAPI.getUsers(pageNum, this.props.pageSize).then(data => {
            this.props.toggleIsFeatching(false );
                    this.props.setUsers(data.items) 
                            })
            }

    render(){
        
        return <>
        {this.props.isFetching ? <Preloader/> : null }
        <Users totalUsersCount={this.props.totalUserCpunt}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChange = {this.onPageChange}
                        users = {this.props.users }
                        follow = {this.props.follow }
                        unfollow = {this.props.unfollow }
                        toggleIsFollowingProgress = {this.props.toggleIsFollowingProgress}
                        followinginProgress ={this.props.followinginProgress}
                        /> 
            </>
}
     
}
let mapStateToProps = (state) =>{
    return{
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserCpunt: state.userPage.totalUserCpunt,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followinginProgress:state.userPage.followinginProgress
    }
}
//mapDispatchToProps  прокинули прямо в connect,если название совпадает, иожно оставлять одно(follow)  и меняем названия AC в reducer
 
export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
   setCurrentPage, setTotalUsersCount,toggleIsFeatching,
   toggleIsFollowingProgress
    }
)(UsersContainer);