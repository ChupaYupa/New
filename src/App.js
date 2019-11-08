import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
//import Container from './components/Container/Container';

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <div className="app-wrapper-content">
            <Dialogs />
            </div>
           {/* <Container />*/}
        </div>
    );}
export default App;