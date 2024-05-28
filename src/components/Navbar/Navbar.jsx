import React, { useContext } from "react";
import "./Navbar.css";
import { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { gettotal } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link to="/">Home</Link>
        <a href="#explore-menu" >
          Menu
        </a>
        {/* <a href="#appdo">Mobile App</a> */}
        <a href="#footer" >
          Contact
        </a>
      </ul>

      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" /> */}
        <div className="navbar-search-icon">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} />
          </Link>
          <div className={gettotal() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
