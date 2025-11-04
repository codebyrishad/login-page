import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { usercontext } from "./App";

function Login() {
  const [name, setName] = useState(""); // input box value
  const { dispatch } = useContext(usercontext);
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault(); // stop page refresh
    dispatch({ type: "LOGIN", payload: name }); // send name to context
    navigate("/home"); // go to home page
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
