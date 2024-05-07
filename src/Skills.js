import React from "react";
import "./Skills.css";
function Skills() {
  const cLang = "images/skills/c_lang.png";
  const cPlusLang = "images/skills/c-plus-lang.png";
  const javaScriptLang = "images/skills/javascript-lang.png";
  const bootStrap = "images/skills/Bootstrap_logo.svg";
  const reactLang = "images/skills/React-Logo.png";
  const htmlLang = "images/skills/html-5.png";
  const cssLang = "images/skills/css-3.png";
  const jQueryLang = "images/skills/jquery-logo.png";
  const javaLang = "images/skills/java.png";
  const sqlLang = "images/skills/mysql.png";

  return (
    <>
      <section className="skill-section container ">
        <h2 className="text-center text-md-start">Skills</h2>
        <section className="row">
          <div className="col-6 col-md-4 col-lg-2 mb-4 skill-box">
            <div className="img-container">
              <div>
                <img src={htmlLang} alt=""></img>
              </div>
              <p className="text-white text-center mb-1">HTML</p>
            </div>
          </div>
          <div className="col-6 col-md-4  col-lg-2 mb-4 skill-box">
            <div className="img-container">
              <div>
                <img src={cssLang} alt=""></img>
              </div>
              <p className="text-white text-center mb-1">CSS</p>
            </div>
          </div>
          <div className="col-6 col-md-4  col-lg-2 mb-4 skill-box">
            <div className="img-container">
              <div>
                <img src={bootStrap} alt=""></img>
              </div>
              <p className="text-white text-center mb-1">Bootstrap</p>
            </div>
          </div>
          <div className="col-6 col-md-4  col-lg-2 mb-4 skill-box">
            <div className="img-container">
              <div>
                <img src={javaScriptLang} alt=""></img>
              </div>
              <p className="text-white text-center mb-1">JavaScript</p>
            </div>
          </div>
          <div className="col-6 col-md-4  col-lg-2 mb-4 skill-box">
            <div className="img-container">
              <div>
                <img src={jQueryLang} alt=""></img>
              </div>
              <p className="text-white text-center mb-1">jQuery</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4 skill-box">
            <div className="img-container">
              <div>
                <img src={reactLang} alt=""></img>
              </div>
              <p className="text-white text-center mb-1">React</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2  mb-4 skill-box">
            <div className="img-container">
              <div>
                <img src={cLang} alt=""></img>
              </div>
              <p className="text-white text-center mb-1">C</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4 skill-box">
            <div className="img-container">
              <div>
                <img src={cPlusLang} alt=""></img>
              </div>
              <p className="text-white text-center mb-1">C++</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4 skill-box">
            <div className="img-container">
              <div>
                <img src={javaLang} alt=""></img>
              </div>
              <p className="text-white text-center mb-1">Java</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-4 skill-box">
            <div className="img-container">
              <div>
                <img src={sqlLang} alt=""></img>
              </div>
              <p className="text-white text-center mb-1">SQL</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Skills;
