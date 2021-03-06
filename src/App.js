import React,{Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'; 
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UseresContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import { getAuthMe } from './redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { initializeApp } from './redux/app-reducer';


class App extends Component{

       componentDidMount(){ 
              this.props.initializeApp();  
        }
        
 render(){
        if(!this.props.initialized){
               return <Preloader/>
        }
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer   /> }/>

                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer/> }/>
                    <Route path='/users'
                           render={ () => <UseresContainer/>}/>
                    <Route path='/login'
                           render={ () => <Login/>}/>
                </div>
            </div>
        )
}}
const mapStateToProps = (state) => ({
       initialized:state.app.initialized
});

export default compose(
       withRouter,
       connect(mapStateToProps, {initializeApp}))(App);