import React from "react";
import featured_img_1 from "../../assets/featured_img_1.jpg";
import featured_img_2 from "../../assets/featured_img_2.jpg";

import "./Content.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Product from "../Product/Product.jsx";
import TopBookSeller from "../TopBookSeller/TopBookSeller";

function Content() {
  return (
    <>
      <div className="main_content">
        <div className="background_img">
          <div className="swipper">
            <a href="#">
              <img className="featured_img" src={featured_img_1} alt="" />
            </a>
          </div>

          <div className="slider_arrows">
            <div className="slider_arrow_1">
              <ChevronLeftIcon />
            </div>
            <div className="slider_arrow_2">
              <ChevronRightIcon />
            </div>
          </div>
        </div>

        <div className="product_container">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="top_book_seller_container">
          <span>Top Sellers in Books for you</span>
          <div className="top_books">
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/61SA9F5Ay9L._AC_SY200_.jpg"
              }
            />
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/41whMkdjtBL._AC_SY200_.jpg"
              }
            />
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
              }
            />
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/61oHbpCqgpL._AC_SY200_.jpg"
              }
            />
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/41whMkdjtBL._AC_SY200_.jpg"
              }
            />
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/41whMkdjtBL._AC_SY200_.jpg"
              }
            />
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/41whMkdjtBL._AC_SY200_.jpg"
              }
            />
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/61oHbpCqgpL._AC_SY200_.jpg"
              }
            />
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/61oHbpCqgpL._AC_SY200_.jpg"
              }
            />
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/61oHbpCqgpL._AC_SY200_.jpg"
              }
            />{" "}
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/61oHbpCqgpL._AC_SY200_.jpg"
              }
            />{" "}
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/61oHbpCqgpL._AC_SY200_.jpg"
              }
            />{" "}
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/61oHbpCqgpL._AC_SY200_.jpg"
              }
            />{" "}
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/61oHbpCqgpL._AC_SY200_.jpg"
              }
            />{" "}
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/61oHbpCqgpL._AC_SY200_.jpg"
              }
            />{" "}
            <TopBookSeller
              link={
                "https://m.media-amazon.com/images/I/61oHbpCqgpL._AC_SY200_.jpg"
              }
            />
          </div>
        </div>

        <div className="product_container container_2">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
}

export default Content;
