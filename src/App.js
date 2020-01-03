import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import Container from './components/Container/Container';
import { BrowserRouter, Route } from 'react-router-dom';
import Message from './components/Dialogs/Message/Message';
import store from './Redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';

// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Settings from './components/Settings/Settings';


//callback передаем в App
const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Nav />
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Container store={props.store} />} />
                    <Route path='/messages' render={() => <DialogsContainer store={props.store} />} />
                    {/* <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} /> */}
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;