import React from 'react'
import { connect } from 'react-redux';
import { followSucces, setCurrentPage, unfollowSucces, toggleIsFollowingProgress,getUsers} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'



class UsersContainer extends React.Component {
    
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }
    onPageChange = (pageNum) =>{
        this.props.getUsers(pageNum, this.props.pageSize)
            }

    render(){
        
        return <>
        {this.props.isFetching ? <Preloader/> : null }
        <Users totalUsersCount={this.props.totalUserCpunt}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChange = {this.onPageChange}
                        users = {this.props.users }
                        follow = {this.props.followSucces}
                        unfollow = {this.props.unfollowSucces}
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
   followSucces,unfollowSucces, setCurrentPage, 
   toggleIsFollowingProgress, getUsers
    }
)(UsersContainer);