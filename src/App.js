import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'; 
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UseresContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer  store={props.store} /> }/>

                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer store = {props.store} /> }/>
                    <Route path='/users'
                           render={ () => <UseresContainer/>}/>
                </div>
            </div>
        )
}

export default App;