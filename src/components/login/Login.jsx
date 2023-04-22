import React from "react";
import { Link } from "react-router-dom";
import "./login.css"; // Import your custom CSS file

const login = () => {
  return (
    <div className="register-container">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="submit-btn" type="submit">
          Login
        </button>
        <h5>Dont have an account?</h5>
        <Link to="/signup">Register</Link>
      </form>
    </div>
  );
};

export default login;
