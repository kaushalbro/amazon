import React from "react";
import featured_img_1 from "../../assets/featured_img_1.jpg";
import featured_img_2 from "../../assets/featured_img_2.jpg";
import "./Content.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Product from "../Product/Product.jsx";
import TopBookSeller from "../TopBookSeller/TopBookSeller.jsx";

function Content() {
  const img1 =
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg";
  const img2 =
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg";
  const img3 =
    "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_3_x1._SY116_CB595261253_.jpg";
  const img4 =
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg";

  const top_books = new Array(
    "https://m.media-amazon.com/images/I/61SA9F5Ay9L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/41whMkdjtBL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61oHbpCqgpL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/41whMkdjtBL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/41whMkdjtBL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/41whMkdjtBL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/41whMkdjtBL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/41whMkdjtBL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/41whMkdjtBL._AC_SY200_.jpg"
  );

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
          <Product
            img={[
              [img1, "Product1"],
              [img2, "Product2"],
              [img3, "Product3"],
              [img4, "Product4"],
            ]}
            heading="Gaming accessories"
          />
          <Product
            img={[
              [img1, "Product1"],
              [img2, "Product2"],
              [img3, "Product3"],
              [img4, "Product4"],
            ]}
            heading="Gaming accessories"
          />
          <Product
            img={[
              [img1, "Product1"],
              [img2, "Product2"],
              [img3, "Product3"],
              [img4, "Product4"],
            ]}
            heading="Gaming accessories"
          />
          <Product
            img={[
              [img1, "Product1"],
              [img2, "Product2"],
              [img3, "Product3"],
              [img4, "Product4"],
            ]}
            heading="Gaming accessories"
          />
          <Product
            img={[
              [img1, "Product1"],
              [img2, "Product2"],
              [img3, "Product3"],
              [img4, "Product4"],
            ]}
            heading="Gaming accessories"
          />
          <Product
            img={[
              [img1, "Product1"],
              [img2, "Product2"],
              [img3, "Product3"],
              [img4, "Product4"],
            ]}
            heading="Gaming accessories"
          />
          <Product
            img={[
              [img1, "Product1"],
              [img2, "Product2"],
              [img3, "Product3"],
              [img4, "Product4"],
            ]}
            heading="Gaming accessories"
          />
          <Product
            img={[
              [img1, "Product1"],
              [img2, "Product2"],
              [img3, "Product3"],
              [img4, "Product4"],
            ]}
            heading="Gaming accessories"
          />
        </div>
        <div className="top_book_seller_container">
          <span>Top Sellers in Books for you</span>
          <div className="top_books">
            {top_books.map((book, index) => {
              return <TopBookSeller key={index} link={book} />;
            })}
          </div>
        </div>

        <div className="product_container container_2">
          <Product
            img={[
              [img1, "Product1"],
              [img2, "Product2"],
              [img3, "Product3"],
              [img4, "Product4"],
            ]}
            heading="Gaming accessories"
          />
          <Product
            img={[
              [img1, "Product1"],
              [img2, "Product2"],
              [img3, "Product3"],
              [img4, "Product4"],
            ]}
            heading="Gaming accessories"
          />
          <Product
            img={[
              [img1, "Product1"],
              [img2, "Product2"],
              [img3, "Product3"],
              [img4, "Product4"],
            ]}
            heading="Gaming accessories"
          />
          <Product
            img={[
              [img1, "Product1"],
              [img2, "Product2"],
              [img3, "Product3"],
              [img4, "Product4"],
            ]}
            heading="Gaming accessories"
          />
        </div>
      </div>
    </>
  );
}

export default Content;
