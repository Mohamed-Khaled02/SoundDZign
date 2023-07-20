import React from "react";
import "./header.css";
import { Navbar } from "..";
const Header = () => {
  return (
    <header>
      <div className="wrapper">
      <Navbar />
        <div className="cta">
          <p>Sound Design Masterclass</p>
          <h1>Learn the Art of Sound Design</h1>
          <a href="#">Demo Lesson</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
