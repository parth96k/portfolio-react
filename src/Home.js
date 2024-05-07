import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";

function Home() {

  const himage= "images/home-page/Gaming.gif";
  return (
    <>
      <section className="home-page container d-md-flex justify-content-between align-items-center pt-5 pt-md-0">
          <div className="home-info">
            <h1 className="text-white text-center text-md-start" >
              <span className="txt-animation txt-hi">Hello,</span>
              <span class="wave">👋</span>
              <br />
              <span className="txt-animation pe-2">I'm</span>
              <span className="txt-animation txt-p">P</span>
              <span className="txt-animation">a</span>
              <span className="txt-animation">r</span>
              <span className="txt-animation">t</span>
              <span className="txt-animation pe-2">h</span>
              <span className="txt-animation">K</span>
              <span className="txt-animation">a</span>
              <span className="txt-animation">l</span>
              <span className="txt-animation">e</span>
            </h1>

            <div className="text-center text-md-start">
              <div>
                <button
                  type="button"
                  className="home-button py-2 px-3 mt-4 rounded-2"
                >
                  <a
                    href="/myCV/show-resume.pdf"
                    download={"show-resume.pdf"}
                    className="text-reset"
                  >
                    Download Resume
                  </a>
                </button>
              </div>
              <div>
                <Link className="text-reset" to={"/contact"}>
                  <button
                    type="button"
                    className="home-button py-2 px-3 rounded-2"
                  >
                    Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="img-div mx-auto">
            <img src={himage} alt=""></img>
          </div>
      </section>
    </>
  );
}

export default Home;
