import React from "react";
import "./Personalized_product.css";
export default function Personalized_product() {
  return (
    <>
      <div className="Personalized_product_container">
        <div className="hr_line_up"></div>
        <p>See personalized recommendations</p>
        <button>Sign in</button>
        <p>New Customer? <a href="#">Start here</a></p>
        <div className="hr_line_down"></div>

      </div>
      <div className="back_to_top"><a href="#">Back to top</a></div>
    </>
  );
}
