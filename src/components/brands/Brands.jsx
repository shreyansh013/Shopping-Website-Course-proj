import React, { useEffect } from "react";
import "./Brands.css";

import { Link } from "react-router-dom";

const Brands = () => {
  useEffect(() => {
    document.title = "ShopCrow-Brands";
  }, []);
  return (
    <div className="brands">
      <h1>Oops!! Not Found Yet</h1>
      <h1>We are coming soon with your favourite brands!!</h1>
      <h3>Stay Connected!</h3>
      <h4>
        Back to Unbranded Mall?{" "}
        <Link to={"/"} className="link-back">
          Click Here
        </Link>
      </h4>
    </div>
  );
};

export default Brands;
