import React, { useContext } from "react";
import NavbarItem from "../components/NavbarItem";
import { BiHomeAlt, BiLandscape, BiPackage } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";
import { UserContext } from "../context";
import { BiLogOut } from "react-icons/bi";
function MainLayout() {
  const userContext = useContext(UserContext);

  return (
    <>
      <Sidebar>
        <h1 className="nav-logo">
          <BiLandscape />
        </h1>
        <NavbarItem title="Home" icon={<BiHomeAlt />} path="/" />
        <NavbarItem title="Products" icon={<BiPackage />} path="/products" />
      </Sidebar>
      <div className="wrapper ">
        <Header>
          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">
              {userContext && userContext.email}
            </span>
            <div className="navbar-dropdown">
              <div
                className="nav-item"
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.removeItem("authKey");
                  window.location.reload(false);
                }}
              >
                <p>
                  <span className="icon">
                    <BiLogOut />
                  </span>{" "}
                  Logout
                </p>
              </div>
            </div>
          </div>
        </Header>
        <Content>
          <Outlet />
        </Content>
      </div>
    </>
  );
}

export default MainLayout;
