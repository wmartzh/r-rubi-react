import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./css/navitem.css";
function NavbarItem(props) {
  const location = useLocation();
  const { title, icon, path } = props;
  const isActiveClass = location.pathname === path ? "nav-item-active" : "";
  return (
    <NavLink
      to={path}
      className={`nav-left nav-item has-text-weight-medium ${isActiveClass}`}
    >
      <span className="icon nav-item-icon">{icon}</span>
      <span className="item-text">{title}</span>
    </NavLink>
  );
}

export default NavbarItem;
