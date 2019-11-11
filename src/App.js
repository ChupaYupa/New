import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import Container from './components/Container/Container';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Nav />
        <div className="app-wrapper-content">
            <Route path='/profile' component={Container} />
            <Route path='/messages' component={Dialogs} />
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music} />
            <Route path='/music' component={Settings} />
            </div>
        </div>
        </BrowserRouter>
    );}
export default App;