import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Container/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";


// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Settings from './components/Settings/Settings';


//callback передаем в App
const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Nav />
                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/messages' render={() => <DialogsContainer />} />
                    <Route path='/users' render={() => <UsersContainer/>} />
                    <Route path='/login' render={() => <Login/>} />
                    {/* <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} /> */}
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;