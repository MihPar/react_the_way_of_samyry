import React from "react";
import object from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={object.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"
        height="55px"
        width="55px"
      ></img>
      <div className={object.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logOut}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
