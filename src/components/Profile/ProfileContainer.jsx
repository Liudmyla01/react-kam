
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRederect';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component{
    componentDidMount(){
    let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;  
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

render(){
    return ( 
        <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            
        </div>
    )
}
}

let mapStateToProps = (state) => (
    {profile: state.profilePage.profile,
     status: state.profilePage.status
    
});


export default compose(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus } ),
    withRouter,
)(ProfileContainer)
