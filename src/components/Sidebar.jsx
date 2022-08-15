import React from "react";

import "./css/sidebar.css";
function Sidebar({ children }) {
  return (
    <div className="sidebar">
      <aside className="menu ">{children}</aside>
    </div>
  );
}

export default Sidebar;
