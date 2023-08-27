import React, { useState } from "react";
import Nav from "./Nav";
import logo from "../assets/logo.svg";
import "../assets/styles/headerStyle.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };
  return (
    <header>
      <img src={logo} alt="logo" height={50} />
      <Nav id="mainNav" classes={menuClicked ? "showMenu" : ""} />
      <span className="hamMenu">
        {!menuClicked && (
          <AiOutlineMenu
            fontSize={26}
            id="hamIcon"
            onClick={handleMenuClick}
            className=""
          />
        )}
        {menuClicked && (
          <AiOutlineClose
            fontSize={26}
            id="closeIcon"
            onClick={handleMenuClick}
          />
        )}
      </span>
    </header>
  );
};
export default Header;
