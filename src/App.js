import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Container from './components/Container';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <Container />
        </div>
    );}
export default App;