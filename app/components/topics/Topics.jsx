import React from "react";
import "./topic.css";
import Image from "next/image";
import studentImage from "../../assets/noto_student-light-skin-tone.svg";
import hrsImage from "../../assets/flat-color-icons_video-file.svg";
import svgIcon from "../../assets/Group8.svg";
const Topics = () => {
  return (
    <div className="topics" id="topics">
      <div className="wrapper">
        <Image src={svgIcon} alt="svg" className="svgImage" />
        <div className="topics-list">
          <div className="items">
            <Image
              className="studentImage"
              src={studentImage}
              alt="studentImage"
            />
            <h3 className="item-title">23,000+</h3>
            <p className="item-p">Students</p>
          </div>

          <div className="items">
            <Image className="hrsImage" src={hrsImage} alt="hrsImage" />
            <h3 className="item-title">26 Hrs</h3>
            <p className="item-p">Video Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
