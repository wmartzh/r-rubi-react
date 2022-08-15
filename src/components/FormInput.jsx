import React from "react";

function FormInput(props) {
  const { label, type, placeholder, leftIcon, rightIcon, handleInput } = props;
  return (
    <div className="field">
      <div className="label">{label}</div>
      <div
        className={`control ${leftIcon && "has-icons-left"} ${
          rightIcon && "has-icons-right"
        }`}
      >
        {leftIcon && <span className="icon is-small is-left">{leftIcon}</span>}
        {rightIcon && (
          <span className="icon is-small is-right">{rightIcon}</span>
        )}
        <input
          onInput={(e) => handleInput(e.target.value)}
          className="input"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default FormInput;
