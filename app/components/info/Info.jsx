"use client";
import React, { useState } from "react";
import "./info.css";
import infoImage1 from "../../assets/Rectangle13.png";
import infoImage2 from "../../assets/Rectangle14.png";
import infoImage3 from "../../assets/Rectangle15.png";
import infoImage4 from "../../assets/Rectangle16.png";
import infoImage5 from "../../assets/Rectangle17.png";
import infoImage6 from "../../assets/Rectangle18.png";
import svgIcon from "../../assets/Group7.svg";
import Image from "next/image";

const Info = () => {
  const [currentImage, setCurrentImage] = useState(infoImage1);
  return (
    <div className="info" id="info">
      <div className="wrapper">
        <h1>What will you learn?</h1>
        <div className="info-items">
          <div className="list-items">
            <ul>
              <li onMouseEnter={() => setCurrentImage(infoImage1)}>
                <span> What are frequencies?</span>
              </li>
              <li onMouseEnter={() => setCurrentImage(infoImage2)}>
                <span>Using DAW</span>
              </li>
              <li onMouseEnter={() => setCurrentImage(infoImage3)}>
                <span>Vocals Processing</span>
              </li>
              <li onMouseEnter={() => setCurrentImage(infoImage4)}>
                <span>Mixing</span>
              </li>
              <li onMouseEnter={() => setCurrentImage(infoImage5)}>
                <span>Mixing Console</span>
              </li>
              <li onMouseEnter={() => setCurrentImage(infoImage6)}>
                <span>Mastering</span>
              </li>
            </ul>
          </div>
          <Image className="image" src={currentImage} alt="info" />
        </div>
        <Image className="svgIcon" src={svgIcon} alt="svg" />
      </div>
    </div>
  );
};

export default Info;
