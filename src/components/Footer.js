import React from "react";
import logo from "../assets/logo.svg";
import Nav from "./Nav";
const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <Nav />
      <section>
        <span>Contact</span>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </section>
      <section>
        <span>Social Media</span>
        <ul>
          <li>facebook</li>
          <li>instagram</li>
          <li>Twitter</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
