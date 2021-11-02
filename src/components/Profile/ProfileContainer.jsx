
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRederect';
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component{
    componentDidMount(){
    let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;  
        }
        this.props.getUserProfile(userId)
    }

render(){
    return ( 
        <div>
            <Profile {...this.props} profile={this.props.profile}/>
            
        </div>
    )
}
}
let AuthRedirctComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state) => ({profile: state.profilePage.profile,
    
});

let WithUrlDataCC =  withRouter(AuthRedirctComponent);

export default connect(mapStateToProps, {getUserProfile} )(WithUrlDataCC);