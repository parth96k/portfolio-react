import React from "react";
import "./About.css"
function About() {
  return (
    <>
      <section className="about-section container d-md-flex justify-content-center align-items-center">
      <div className="about-left text-white">
        <h2>Who I am</h2>
        <p>
          Hey there! I'm a passionate web developer with a versatile skill set,
          specializing primarily in full-stack development. I possess a deep
          understanding of both front-end and back-end development and am
          constantly refining my abilities while seeking opportunities for
          growth in both domains.
        </p>
        <p>
          Currently, I am actively seeking full-stack opportunities that
          encompass both front-end and back-end development. If you're
          interested, I'd be thrilled to connect and discuss potential
          collaborations. I am currently working on several projects that
          emphasize specific tech stacks and frameworks, allowing me to further
          enhance my expertise.
        </p>
      </div>
      <div className="about-right text-white">
        <h2>Personal Details:</h2>
        <div>
          <ul className="li-detail ps-1 ps-md-0">
            <li>
              <span className="detail-list">Name: </span> Parth Manohar Kale
            </li>
            <li>
              <span className="detail-list">Date of birth: </span>26<sup>th</sup> October 2000
            </li>
            <li>
              <span className="detail-list">Address: </span>Near PWS College ward No. 5 kalmeshwar, Nagpur.
            </li>
            <li>
              <span className="detail-list">Nationality: </span>Indian
            </li>
            <li>
              <span className="detail-list">Phone: </span>9766484163
            </li>
            <li>
              <span className="detail-list">Alternate Phone: </span>8999299591
            </li>
            <li>
              <span className="detail-list">Email: </span>parthkale582@gmail.com
            </li>
          </ul>
        </div>
      </div>
      </section>
    </>
  );
}

export default About;
