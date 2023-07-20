import React from "react";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import "./tesimonials.css";
import Image from "next/image";
const Tesimonials = () => {
  return (
    <div className="Tesimonials" id="tesimonials">
      <div className="wrapper">
        <h1>What our students say?</h1>
        <div className="Tesimonials-list">
          <div className="persons">
            <Image src={person1} alt="person1" />
            <div>
              <h3>Peter Adams</h3>
              <p>This is a great course. I got to learn a lot.</p>
            </div>
          </div>

          <div className="persons">
            <Image src={person2} alt="person2" />
            <div>
              <h3>Robert Fox</h3>
              <p>
                I got to learn a lot about Music Production with this course.
                Thanks :)
              </p>
            </div>
          </div>

          <div className="persons">
            <Image src={person3} alt="person3" />
            <div>
              <h3>Emily Smith</h3>
              <p>Awesome! Great job!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tesimonials;
