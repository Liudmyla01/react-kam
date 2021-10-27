import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component{
    componentDidMount(){
    let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;  
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
              this.props.setUserProfile(response.data);  
    });    
     
    }

render(){
    return ( 
        <div>
            <Profile {...this.props} profile={this.props.profile}/>
            
        </div>
    )
    }
}


let mapStateToProps = (state) => ({profile: state.profilePage.profile });

let WithUrlDataCC =  withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile:setUserProfile} )(WithUrlDataCC);