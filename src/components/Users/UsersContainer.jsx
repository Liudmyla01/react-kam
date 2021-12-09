import React from 'react'
import { connect } from 'react-redux';
import { followSucces, setCurrentPage, unfollowSucces, toggleIsFollowingProgress,getUsers} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRederect';
import { getAllUsers, getCurrentPage, getFollowinginProgress, getIsFetching, getPageSize, getTotalUserCpunt } from '../../redux/users-selector';



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
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUserCpunt: getTotalUserCpunt(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followinginProgress:getFollowinginProgress(state)
    }
}
//mapDispatchToProps  прокинули прямо в connect,если название совпадает, иожно оставлять одно(follow)  и меняем названия AC в reducer
 
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        followSucces,unfollowSucces, setCurrentPage, 
        toggleIsFollowingProgress, getUsers
         }
     )
)(UsersContainer)

