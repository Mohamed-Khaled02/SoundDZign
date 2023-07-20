import React from "react";
import infoImage1 from "../../assets/Thumbnail.png";
import guitar from "../../assets/guitar.png";
import realImage from "../../assets/realPower.png";
import "./blog.css";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="blog" id="blog">
      <div className="wrapper">
        <h1>Latest Posts</h1>
        <div className="blog-list">
          {/* card 1 */}
          <div className="card">
            <Image className="image" src={infoImage1} alt="image" />
            <p>How To Use Drum Machine in Logic Pro X</p>
          </div>
          {/* card 2 */}
          <div className="card">
            <Image className="image" src={guitar} alt="image" />
            <p>How To Mix Guitars Effectively</p>
          </div>
          {/* card 3 */}
          <div className="card">
            <Image className="image" src={realImage} alt="image" />
            <p>The Real Power of Harmonies in Music Production</p>
          </div>
        </div>
        <div className="btn-container">
          <a href="#">All Posts</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
