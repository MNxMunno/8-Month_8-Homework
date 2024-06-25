import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  let userData = JSON.parse(localStorage.getItem("user-data"));
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <NavLink to={"/home"}>LOGO</NavLink>
          </div>

          <NavLink to={"/CreateProducts"}>Create Products</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
