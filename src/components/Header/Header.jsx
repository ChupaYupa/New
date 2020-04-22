import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    debugger
    return (
            <header className={s.header}>
                <img src= "https://miro.medium.com/max/512/1*jA5lTgPRbyimsFNod7SlFQ.png" />
                <div className={s.loginBlock}> {

                    props.isAuth ?
                        <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                        :<NavLink to={'/login'}>login</NavLink>}</div>
            </header>);
}
export default Header;