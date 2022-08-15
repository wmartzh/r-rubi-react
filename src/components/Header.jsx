import React from "react";
import "./css/header.css";
import { BiArrowBack } from "react-icons/bi";
function Header({ children }) {
  return (
    <nav className="navbar page-header m-3 p-2 ">
      <div className="navbar-start">
        <span className="icon" size={30}>
          <BiArrowBack />
        </span>
      </div>
      <div className="navbar-end">{children}</div>
    </nav>
  );
}

export default Header;
