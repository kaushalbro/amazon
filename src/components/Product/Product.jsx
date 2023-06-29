import React from "react";
import "./Product.css";

export default function Product(props) {
  const imgs = props.img;
  
  return (
    <>
      <div className="product">
        <p>{props.heading}</p>
        <div className="items">
          {imgs.map((img) => (
            <div key={img[0]} className="item_1">
              <a href="#">
                <img className="item_1_img" src={img[0]} alt="" />
              </a>
              <br />
              <div className="item_lable cursor_pointer">{img[1]}</div>
            </div>
          ))}
        </div>
        <a href="#">See more</a>
      </div>
    </>
  );
}
