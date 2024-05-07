import React from "react";
import "./Education.css";
function Education() {
//   const studyImg = "images/education-page/study.svg";
  return (
    <>
      <section className="container education-section text-white d-lg-flex justify-content-center align-items-center gap-4">
      <p className="tag-education d-none d-lg-flex "><i class="fa-solid fa-less-than"></i>Education</p>
          <div className="education-box">
            <div className="d-flex">
              <div className="cap-div me-2 pt-1">
                <div>
                  <i class="fa-solid fa-graduation-cap"></i>
                </div>
              </div>
              <div>
                <div>
                  <p className="education-duration">2019-2023</p>
                  <p className="education-name">Bachelors Of Engineering</p>
                </div>
              </div>
            </div>
            <div>
              <p>
                <span className="education-list">College: </span>S. B. Jain
                Institute of Technology, Management & Research, Nagpur
              </p>
              <p>
                <span className="education-list">Department: </span>Computer
                Science and Engineering
              </p>
              <p>
                <span className="education-list">Percentage: </span>68.11%
              </p>
            </div>
          </div>
          <div className="education-box">
            <div className="d-flex">
              <div className="cap-div me-2 pt-1">
                <div>
                  <i class="fa-solid fa-graduation-cap"></i>
                </div>
              </div>
              <div>
                <div>
                  <p className="education-duration">2018-2019</p>
                  <p className="education-name">HSC (Higher Secondary Certificate)</p>
                </div>
              </div>
            </div>
            <div>
              <p>
                <span className="education-list">College: </span>Nandanwan
                Junior College of Arts & Science
              </p>
              <p>
                <span className="education-list">Board: </span>Maharashtra State
                Board
              </p>
              <p>
                <span className="education-list">Percentage: </span>62.77%
              </p>
            </div>
          </div>
          <div className="education-box">
            <div className="d-flex">
              <div className="cap-div me-2 pt-1">
                <div>
                  <i class="fa-solid fa-graduation-cap"></i>
                </div>
              </div>
              <div>
                <div>
                  <p className="education-duration">2016-2017</p>
                  <p className="education-name">SSC (Secondary School Certificate)</p>
                </div>
              </div>
            </div>
            <div>
              <p>
                <span className="education-list">College: </span>Jindal Vidya
                Mandir
              </p>
              <p>
                <span className="education-list">Board: </span>Maharashtra State
                Board
              </p>
              <p>
                <span className="education-list">Percentage: </span>81.20%
              </p>
            </div>
          </div>
      <p className="tag-education-close d-none d-lg-flex ">Education/<i class="fa-solid fa-greater-than"></i></p>

      </section>
    </>
  );
}

export default Education;
