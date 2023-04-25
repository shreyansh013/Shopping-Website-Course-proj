import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.css"; // Import your custom CSS file

const Login = () => {
  useEffect(() => {
    document.title = "ShopCrow-Login";
  }, []);
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button
          className="submit-btn"
          type="submit"
          onClick={() => {
            alert("You have been logged in!");
          }}
        >
          Login
        </button>
        <h5>Dont have an account?</h5>
        <div className="to-reg">
          <Link to="/signup">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
