import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className="app-wrapper">
            <header className={s.header}>
                <img src= "https://miro.medium.com/max/512/1*jA5lTgPRbyimsFNod7SlFQ.png" />
            </header>
        </div>);
}
export default Header;