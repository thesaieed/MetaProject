import React from "react";
import footerlogo from "../assets/logo-white.png";
import Nav from "./Nav";
import "../assets/styles/footerStyle.css";
import {
  FaLocationDot,
  FaPhoneFlip,
  FaFacebook,
  FaInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  return (
    <footer>
      <div>
        <section>
          <img src={footerlogo} alt="logo" height="200px" />
        </section>
        <section>
          <span>sitemap</span>
          <Nav id="footerNav" />
        </section>

        <section>
          <span>Contact</span>
          <ul>
            <li>
              <FaLocationDot style={{ marginRight: 5 }} />
              2919 North Avers Avenue, Chicago
            </li>
            <li>
              <FaPhoneFlip style={{ marginRight: 5 }} /> (312) 265-7845
            </li>
            <li>
              <IoMail
                fontSize={20}
                style={{ marginRight: 5, marginBottom: -2 }}
              />
              info@littlelemon.com
            </li>
          </ul>
        </section>
        <section>
          <span>Social Media</span>
          <ul className="social-links">
            <li>
              <a href="http://www.facebook.com">
                <FaFacebook style={{ marginRight: 5 }} color="white" />
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com">
                <FaInstagram style={{ marginRight: 5 }} color="white" />
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com">
                <FaSquareTwitter style={{ marginRight: 5 }} color="white" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
