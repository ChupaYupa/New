import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Container from './components/Container/Container';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <Container />
        </div>
    );}
export default App;