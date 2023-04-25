import React, { useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    document.title = "ShopCrow-Contact";
  }, []);
  return (
    <div className="contact-page">
      <div className="main">
        <h2>Write to our Team!</h2>
        <div className="form">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="EMail" required />
            <textarea
              placeholder="Write your Queries/Thoughts..."
              rows={"10"}
              cols={"10"}
            ></textarea>
          </form>
        </div>
      </div>
      <div className="section">
        <div className="section-heading">
          <h2>Find us here</h2>
        </div>
        <div className="connects">
          <div className="mobile-connect">
            <div>Mobile: 9532841750</div>
            <div className="mail-link">
              e-mail:
              <a href="mailto:ShopCrowDummy@mail.com">ShopCrowDummy@mail.com</a>
            </div>
          </div>
          <div className="address-connect">
            <div>Address: JIIT, Sec-62, Noida, UP</div>
          </div>
          <div className="socialmedia-connect">
            <div>
              <a href="https://www.facebook.com/" target="_blank">
                Follow our page
              </a>
              at Facebook
            </div>
            <div>
              <a href="https://www.instagram.com/"> Follow us </a>
              on our Instagram
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
