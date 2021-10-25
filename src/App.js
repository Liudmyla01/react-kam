import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar'; 
import {BrowserRouter, Route} from "react-router-dom";
import store from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UseresContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer  store={props.store} /> }/>

                    <Route path='/profile'
                           render={ () => <ProfileContainer store = {props.store} /> }/>
                    <Route path='/users'
                           render={ () => <UseresContainer/>}/>
                </div>
            </div>
        )
}

export default App;