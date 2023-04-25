import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer-main">
      <div className="key-note">
        <h4>
          Love our Site? <br />{" "}
          <h6>
            <Link to={"/contact"}>Write to our Developer!</Link>
          </h6>
        </h4>
      </div>
      <div className="site-name">
        <h2>
          <Link to={"/"}>ShopCrow.Inc</Link>
        </h2>
        <h6>All rights reserved, 2023</h6>
      </div>
      <div className="socialMedia-links">
        <h5>
          Our Social Media Handles <br />
          <a href="https://www.facebook.com/" target="_blank">
            Facebook
          </a>
          <br />
          <a href="https://www.instagram.com/" target="_blank">
            Instagram
          </a>
        </h5>
      </div>
    </div>
  );
};

export default footer;
