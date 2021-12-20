import React from "react";
import "../style-pages/login.css";

const Login = () => {
  return (
    <div className="user-bg-login">
      <div className="loginbox">
        <div className="grid-container-admin">
          <div className="login-header">
            <h1>Login</h1>
          </div>
          <div className="login-form">
            <form>
              <div className="inputbox">
                <input type="text" required />
                <label>Email</label>
              </div>
              <div className="inputbox">
                <input type="password" required />
                <label>Password</label>
              </div>
            </form>
            <a href='/home'> <button type="submit" className="login-button"> Masuk </button> </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;