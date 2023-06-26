import React from "react";
import "./Product.css";
const img1 = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
const img2 = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
const img3 = "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_3_x1._SY116_CB595261253_.jpg"
const img4 = 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg'
export default function Product() {
  return (
    <>
      <div className="product">
        
        <p>Gaming accessories</p>
        <div className="items">
             <div className="item_1"><a href="#"><img className="item_1_img" src={img1} alt="" /></a>
             <br /><div className="item_lable cursor_pointer">Product_1</div></div>
             <div className="item_1"><a href="#"><img className="item_1_img" src={img2} alt="" /></a>
             <br /><div className="item_lable cursor_pointer">Product_2</div></div>
             <div className="item_1"><a href="#"><img className="item_1_img" src={img3} alt="" /></a>
             <br /><div className="item_lable cursor_pointer">Product_3</div></div>
             <div className="item_1"><a href="#"><img className="item_1_img" src={img4} alt="" /></a>
             <br /><div className="item_lable cursor_pointer">Product_</div></div>
        </div>
        <a href="#">See more</a>
      </div>
    </>
  );
}
