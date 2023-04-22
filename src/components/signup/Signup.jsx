import React from "react";
import "./signup.css"; // Import your custom CSS file

const Signup = () => {
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="submit-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
