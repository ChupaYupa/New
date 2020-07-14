import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <NavLink to="/profile" className={s.NavLink}>
        <img
          src="https://miro.medium.com/max/512/1*jA5lTgPRbyimsFNod7SlFQ.png"
          to="/profile"
        />
      </NavLink>
      <div className={s.loginBlock}>
        {" "}
        {props.isAuth ? (
          <div>
            {" "}
            {props.login}
            <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
