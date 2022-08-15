import React, { useState } from "react";
import FormInput from "../components/FormInput";
import BButton from "../components/BButton";
import { BiEnvelope, BiLockAlt, BiLogIn } from "react-icons/bi";
import { authenticate } from "../services/authService";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const response = await authenticate(email, password);
    if (response) {
      navigate("/", { replace: true });
    }
    console.log("🔰 > file: Login.jsx > line 12 > login > response", response);
  };
  return (
    <div className="hero is-widescreen">
      <div className="container is-fullhd  is-align-items-center center-screen">
        <div className="box ">
          <h5 className="title is-5">Login Page</h5>
          <FormInput
            label="Email"
            type="text"
            placeholder="Please write an email"
            handleInput={setEmail}
            leftIcon={<BiEnvelope />}
          />
          <FormInput
            label="Password"
            type="password"
            placeholder="Please write your password"
            handleInput={setPassword}
            leftIcon={<BiLockAlt />}
          />
          <div className="control">
            <BButton
              type="success"
              title="Login"
              icon={<BiLogIn />}
              handleClick={login}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
