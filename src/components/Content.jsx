import React from "react";
import "./css/content.css";
function Content({ children }) {
  return <div className="content custom-container box">{children}</div>;
}

export default Content;
