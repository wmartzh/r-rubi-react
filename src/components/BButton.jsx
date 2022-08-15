import React from "react";

function BButton(props) {
  const { type, title, icon, size, handleClick } = props;
  return (
    <button
      onClick={handleClick}
      className={`button ${type && "is-" + type} ${size && "is-" + size}`}
    >
      {icon && <span className={`icon ${size && "is-" + size}`}>{icon}</span>}{" "}
      <span>{title}</span>
    </button>
  );
}

export default BButton;
