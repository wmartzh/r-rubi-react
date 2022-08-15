import React from "react";
import "./css/header.css";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
function Header({ children }) {
  const navigate = useNavigate();

  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <nav className="navbar page-header m-3 p-2 ">
      <div className="navbar-start">
        <button onClick={goBack} className="button is-white" size={30}>
          <span className="icon">
            <BiArrowBack />
          </span>
        </button>
      </div>
      <div className="navbar-end">{children}</div>
    </nav>
  );
}

export default Header;
