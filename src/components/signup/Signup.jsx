import React, { useEffect } from "react";
import "./signup.css"; // Import your custom CSS file

const Signup = () => {
  useEffect(() => {
    document.title = "ShopCrow-Signup";
  }, []);
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button
          className="submit-btn"
          type="submit"
          onClick={() => {
            alert("Your account has been registered!");
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
