import React from "react";
import "./login.css";

function Login() {
  return (
    <form onSubmit={}>
      <label htmlFor="email address">Email Address</label>
      <input type="email" />
      <label htmlFor="Password">Password</label>
      <input type="email" />
      <button type="submit" className="login-button">Login</button>
    </form>
  )
}

export default Login