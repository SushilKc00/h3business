import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { TbPhone, TbSearch } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";
import Logo from "../../assets/logo.avif";
export const Header = () => {
  const [sticky, addSticky] = useState(false);
  const [toogle, setToggle] = useState(false);

  const handleTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        addSticky(true);
      } else {
        addSticky(false);
      }
    });
  }, []);
  return (
    <>
      <header className={sticky ? "sticky" : ""}>
        <nav className="nav-bar">
          {/* logo section  */}
          <div className="left-nav">
            <div
              className="menu"
              onClick={() => {
                setToggle(!toogle);
              }}
            >
              {toogle ? <AiOutlineClose /> : <RxHamburgerMenu />}
            </div>
            <figure>
              <NavLink to="/">
                <img src={Logo} alt="logo" className="image-logo" />
              </NavLink>
            </figure>
            <div className="cart-area">
              <p className="icon-count">2</p>
              <AiOutlineShoppingCart className="icons cart" />
            </div>
          </div>

          {/* search section  */}
          <div className="search-input">
            <TbSearch className="search-icon" />
            <input
              type="search"
              placeholder="Search anything for you pet"
              className="search-bar"
            />
          </div>

          {/* navlink-section  */}
          <div className="nav-bar-links">
            <NavLink className="links">
              <TbPhone className="icons" /> Support
            </NavLink>
            <NavLink className="links">
              <VscAccount className="icons" /> Account
            </NavLink>
            <NavLink className="links" to="/login">
              <IoIosLogIn className="icons" /> Login
            </NavLink>
            <NavLink className="links" to="/register">
              <IoIosLogIn className="icons" /> Register
            </NavLink>
            <div className="cart-logo">
              <p className="icon-count">2</p>
              <NavLink className="links">
                <AiOutlineShoppingCart className="icons cart" /> Cart
              </NavLink>
            </div>
          </div>
        </nav>
        <div className={toogle ? "nav-list show" : "nav-list"}>
          <ul>
            <li>
              Dogs <FaArrowCircleDown style={{ fontSize: "1rem" }} />
              <div className="common-style">
                <div>
                  <h2
                    style={{
                      marginTop: "0rem",
                      fontFamily: "sans-serif",
                      fontSize: "1.5rem",
                    }}
                  >
                    Food
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Dog Accessories
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Walk Essential
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Grooming
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontFamily: "sans-serif",
                      fontSize: "1.5rem",
                    }}
                  >
                    Travells
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              Cats <FaArrowCircleDown style={{ fontSize: "1rem" }} />
              <div className="common-style">
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontFamily: "sans-serif",
                      fontSize: "1.5rem",
                    }}
                  >
                    Food
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Dog Accessories
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Walk Essential
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Grooming
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontFamily: "sans-serif",
                      fontSize: "1.5rem",
                    }}
                  >
                    Travells
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              Small Animals <FaArrowCircleDown style={{ fontSize: "1rem" }} />
              <div className="common-style">
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontFamily: "sans-serif",
                      fontSize: "1.5rem",
                    }}
                  >
                    Food
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Dog Accessories
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Walk Essential
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Grooming
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontFamily: "sans-serif",
                      fontSize: "1.5rem",
                    }}
                  >
                    Travells
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              Brands <FaArrowCircleDown style={{ fontSize: "1rem" }} />
              <div className="common-style">
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontFamily: "sans-serif",
                      fontSize: "1.5rem",
                    }}
                  >
                    Food
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Dog Accessories
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Walk Essential
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Grooming
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontFamily: "sans-serif",
                      fontSize: "1.5rem",
                    }}
                  >
                    Travells
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              Shop By LifeStyle
              <FaArrowCircleDown style={{ fontSize: "1rem" }} />
              <div className="common-style">
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontFamily: "sans-serif",
                      fontSize: "1.5rem",
                    }}
                  >
                    Food
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Dog Accessories
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Walk Essential
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Grooming
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
                <div>
                  <h2
                    style={{
                      marginTop: "1rem",
                      fontFamily: "sans-serif",
                      fontSize: "1.5rem",
                    }}
                  >
                    Travells
                  </h2>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                      color: "gray",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>

                    <h3>Treats & Biscuits</h3>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                    <p>Special food</p>
                    <p>Dry food </p>
                    <p>wet food </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="auth-section">
                <p>
                  <NavLink className="auth-links" to="/register">
                    Register
                  </NavLink>
                </p>
                <p>
                  <NavLink className="auth-links" to="/login">
                    login
                  </NavLink>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </header>
      <div
        className={sticky ? "top-slider show-slide" : "top-slider"}
        onClick={handleTop}
      >
        <FaArrowAltCircleUp style={{ fontSize: "2.4rem", color: "white" }} />
      </div>
    </>
  );
};
