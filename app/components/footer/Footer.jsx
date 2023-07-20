import React from "react";
import facebookIcon from "../../assets/FacebookLogo.svg";
import instaIcon from "../../assets/InstagramLogo.svg";
import "./footer.css";
import Image from "next/image";
import { animateScroll as scroll } from "react-scroll";
import {AiOutlineArrowUp} from "react-icons/ai"
const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer-list">
          <div>
            <p className="logo">
              Sound<span>DZign</span>
            </p>
            <div className="icons">
              <Image src={facebookIcon} alt="facebookIcon" />
              <Image src={instaIcon} alt="instaIcon" />
            </div>
            <p className="copyright">
              This website is designed by GTCoding Ⓒ 2022
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <p>Blog</p>
            <p>Provacy Policy</p>
          </div>

          <div>
            <h4>Contact Us</h4>
            <p>contact@email.com</p>
            <p>+1 999 9999 999</p>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} className="gotop">
        <AiOutlineArrowUp size={20}/>
      </button>
    </div>
  );
};

export default Footer;
