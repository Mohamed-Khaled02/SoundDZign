import React, { useState } from "react";
import "./navbar.css";
import menuIcon from "../../assets/MenuIcon.svg";
import closeIcon from "../../assets/close.svg";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <p className="logo">
          Sound<span>DZign</span>
        </p>
        <ul>
          <li>
            <a href="#info">Course Details</a>
          </li>
          <li>
            <a href="#topics">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#tesimonials">Tesimonials</a>
          </li>
        </ul>
        <Image
          className="image"
          src={menuIcon}
          alt={"menu"}
          onClick={() => setOpen((prev) => !prev)}
        />
      </nav>
      {/* menu list */}
      {open && (
        <div className="menu">
          <div className="closeIcon" onClick={() => setOpen((prev) => !prev)}>
            <Image src={closeIcon} alt="closeIcon" />
          </div>
          <ul className="menu-items">
            <li>
              <a href="#info">Course Details</a>
            </li>
            <li>
              <a href="#topics">About</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#tesimonials">Tesimonials</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
