import "./Header.css";
import logo from "../../assets/logo_amazon_1.png";
import usa_logo from "../../assets/usa_flag.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./SideBar.css";
import { useState } from "react";
function Header() {
  const [display, setDisplay] = useState("none");
  const [toggle, setToggle] = useState(false)

  function showSideBar() {
    setDisplay("block");
  }
  function hideDisplay() {
    setDisplay("none");
  }
  return (
    <>
      <div className="side_bar1" style={{ display: display }}>
        <div>
          <div className="side_bar_main_content">
            <div className="sign_in_section">
              <div className="sign_in_section_col1">
                <a href="#">
                  <span>Browse</span>
                  <span>Amazon</span>
                </a>
              </div>
              <div className="sign_in_section_col2">
                <a href="#">
                  <span>Sign in</span>
                  <span>
                    <PersonOutlineIcon />
                  </span>
                </a>
              </div>
            </div>

            <div className="sidebar_links">
              <div className="sidebar_home_link">
                <span>
                  <a href="#">Amazon Home</a>
                </span>
                <span>
                  <HomeOutlinedIcon />
                </span>
              </div>
              <div className="sidebar_trending_links">
                <span>Trending</span>
                <ul>
                  <li>
                    <a href="#">Movers & Sharkers</a>
                  </li>
                </ul>
              </div>

              <div className="sidebar_top_departments">
                <span>Top Departments</span>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">PC</a>
                  </li>
                  <li>
                    <a href="#">Health & Household</a>
                  </li>
                  <li>
                    <a href="#">Books</a>
                  </li>
                  <li>
                    <a href="#">Electronics</a>
                  </li>
                  <li>
                    <a href="#">Motors</a>
                  </li>
                  <li>
                    <a href="#">Stationaty</a>
                  </li>
                  <li>
                    <a href="#">Kitchen Item</a>
                  </li>
                  <li>
                    <a href="#">Nepali Books</a>
                  </li>
                  <li>
                    <a href="#">About Nepal</a>
                  </li>
                  <li>
                    <a href="#">See All </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="exit_section" onClick={hideDisplay}>
            <CloseIcon
              className="exit_side_bar"
              onClick={() => {
                hideDisplay();
              }}
            />
          </div>
        </div>
      </div>
      <header>
        <div className="main_logo">
          <div
            className="mobile_view_menu"
            onClick={() => {
              showSideBar();
            }}>
            <a href="#">
              <MenuIcon />
            </a>
          </div>
          <img className="border cursor_pointer" src={logo} alt="" />
        </div>
        <div className="deliver_location border cursor_pointer">
          <span>
            <LocationOnOutlinedIcon className="location_icon" />
          </span>
          <p>
            Deliver to <br /> <span>Nepal</span>
          </p>
        </div>
        <div className="search_header">
          <span className="all_cat border cursor_pointer"  onClick={()=>{
           setToggle(!toggle);
          }}>
            <p>All</p>
            <ArrowDropDownOutlinedIcon />
            {
              toggle && (
                <div className="all_cat_dropdown">
                <ul><li><a href="#"> HEllo helo </a></li></ul>
                <ul><li><a href="#"> HEllo helo </a></li></ul>
                <ul><li><a href="#"> HEllo helo </a></li></ul>
                <ul><li><a href="#"> HEllo helo </a></li></ul>
                <ul><li><a href="#"> HEllo helo </a></li></ul>
                <ul><li><a href="#"> HEllo helo </a></li></ul>
                <ul><li><a href="#"> HEllo helo </a></li></ul>
                <ul><li><a href="#"> HEllo helo </a></li></ul>
                <ul><li><a href="#"> HEllo helo </a></li></ul>
                <ul><li><a href="#"> HEllo helo </a></li></ul>
                <ul><li><a href="#"> HEllo helo </a></li></ul>
                <ul><li><a href="#"> HEllo helo </a></li></ul>
                <ul><li><a href="#"> HEllo helo </a></li></ul>
                <ul><li><a href="#"> HEllo helo </a></li></ul>
                <ul><li><a href="#"> HEllo helo </a></li></ul>
                <ul><li><a href="#"> HEllo helo </a></li></ul>

            </div>
              )
            }
        
          </span>
          <input type="text" placeholder="Search Amazon" />
          <div className="btn_search border cursor_pointer">
            <SearchOutlinedIcon className="search_icon " />
          </div>
        </div>
        <div className="lang border cursor_pointer">
          <img src={usa_logo} alt="" />
          <span>EN</span>
          <ArrowDropDownOutlinedIcon />
        </div>
        <div className="sign_in_and_acc_lists border cursor_pointer">
          <p>
            Hello, sign in <br />
            <span>Account & Lists</span>
          </p>
          <div>
            <ArrowDropDownOutlinedIcon className="arrow" />
          </div>
        </div>
        <div className="returns_link border cursor_pointer">
          <p>Returns</p>
          <p>& Orders</p>
        </div>
        <div className="cart carr border cursor_pointer">
          <div className="cart_icon">
            <div className="line"></div>
            <ShoppingCartOutlinedIcon className="cart_1" />
            <span className="total_product ">10 </span>
          </div>
        </div>
      </header>
      <div className="link_bar">
        <div className="link_bar_menu">
          <div className="nav_menu border cursor_pointer">
            <MenuIcon />
            <span>All</span>
          </div>
          <ul>
            <li>
              <a href="#">Today's Deals</a>
            </li>
            <li>
              <a href="#">Customer services</a>
            </li>
            <li>
              <a href="#">Registry</a>
            </li>
            <li>
              <a href="#">Gift cards</a>
            </li>
            <li>
              <a href="#">Sell</a>
            </li>
          </ul>
        </div>

        <div className="border cursor_pointer">
          <a href="#" className="great_deal_link">
            Shop great deals now
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
