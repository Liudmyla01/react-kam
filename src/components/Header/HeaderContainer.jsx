import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import { setUserData } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount(){
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true})
    //     .then(response => {
    //         if(response.data.resultCode === 0){
    //               let {id, login, email} = response.data.data;
    //               this.props.setUserData(id,email,login)
    //           }
    // });
    usersAPI.authMe({...this.props})
    }


    render(){
    return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setUserData}) (HeaderContainer);