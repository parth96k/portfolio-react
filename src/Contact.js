import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useRef } from "react";
import "./Contact.css";
function Contact() {
  let date = new Date();
  let copyrightDate = date.getFullYear();
  const contactImg = "images/contact/contact-img.svg";

  const form = useRef();
  let isValid = true;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const nameRegex = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    if (newName === "") {
      setErrorName("Name is required*");
      isValid = false;
    } else if (!nameRegex.test(newName)) {
      setErrorName("Name is incorrect");
      isValid = false;
    } else {
      setErrorName("");
    }
  };
  const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail === "") {
      setErrorEmail("email is required*");
      isValid = false;
    } else if (!emailRegex.test(newEmail)) {
      setErrorEmail("Invalid email format");
      isValid = false;
    } else {
      setErrorEmail("");
    }
  };

  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    if (newMessage === "") {
      setErrorMessage("enter a message*");
      isValid = false;
    } else {
      setErrorMessage("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setErrorName("Name is required");
      isValid = false;
    }
    else if(!nameRegex.test(name)){
      setErrorName("Name is incorrect");
      isValid = false;
    }
    if (email === "") {
      setErrorEmail("email is required");
      isValid = false;
    }
    else if(!emailRegex.test(email)){
      setErrorEmail("email is incorrect");
      isValid = false;
    }
    if (message === "") {
      setErrorMessage("message is required");
      isValid = false;
    }
    if (isValid) {
      setIsLoading(true);
      emailjs
        .sendForm(
          "service_4gumx09",
          "template_wzz9hpb",
          form.current,
          "ete0XEyIwBJnlCsx0"
        )
        .then(
          (result) => {
            console.log(result.text);
            setEmail("");
            setName("");
            setMessage("");
            document.getElementById("success-message").innerHTML =
              "<h5>Message Sent Successfully</h5>";
            setTimeout(() => {
              document.getElementById("success-message").innerHTML = "";
            }, 4000);
          },
          (error) => {
            console.log(error.text);
            document.getElementById("success-message").innerHTML =
              "<h5>Something went wrong! Try Again Later.</h5>";
              setTimeout(() => {
                document.getElementById("success-message").innerHTML = "";
              }, 4000);
          }
          
        ).finally(() => {
          setIsLoading(false);
        });;
        
    }
  };

  return (
    <>
      <section className="contact-section container">
        <h2 className="text-center text-md-start">Contact</h2>
        <section className="row form-row">
          <div className="col-lg-4">
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              <div>
                <label for="form-name" className="label-name">
                  Name:
                </label>
                {errorName && <div style={{ color: "red" }}>{errorName}</div>}
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  id="form-name"
                  className="form-input-tag form-control"
                  value={name}
                  onChange={handleNameChange}
                  name="sender_name"
                ></input>
              </div>
              <div>
                <label for="form-email" className="label-name">
                  Email:
                </label>
                {errorEmail && <div style={{ color: "red" }}>{errorEmail}</div>}
                <input
                  type="text"
                  placeholder="Enter Email"
                  id="form-email"
                  className=" form-input-tag form-control"
                  value={email}
                  onChange={handleEmailChange}
                  name="sender_email"
                ></input>
              </div>
              <div>
                <label for="form-message" className="label-name">
                  Message:
                </label>
                {errorMessage && (
                  <div style={{ color: "red" }}>{errorMessage}</div>
                )}

                <textarea
                  type="text"
                  placeholder="Enter Message"
                  id="form-message"
                  className=" form-input-tag form-control"
                  value={message}
                  onChange={handleMessageChange}
                  name="sender_message"
                ></textarea>
              </div>
              <div>
                <p id="success-message"></p>
              </div>
              <div className="text-center">
                <button type="submit" className="mt-2 py-2 px-4 form-button" >
                {isLoading ? "Sending..." : "Send"}{" "}
                  <i className="fa-solid fa-paper-plane ps-1"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4 pt-5 pt-md-0 center-info">
            <div>
              <div>
                <div className="d-flex pb-2">
                  <div className="social-div">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-white pt-2">parthkale582@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex pb-2">
                  <div className="social-div">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-white pt-2">9766484163</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="social-div">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <p className="text-white pt-2">Nagpur, India</p>
                  </div>
                </div>
              </div>
              <div className="py-5 d-flex justify-content-center">
                <a
                  href="https://www.linkedin.com/in/parth-kale-9ab371246/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social-div">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </a>
                <a
                    href="https://www.facebook.com/kartik.kale.7543"
                    target="_blank"
                    rel="noreferrer"
                  >
                <div className="social-div">
                 
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
                </a>
                <a
                    href="https://github.com/parth96k"
                    target="_blank"
                    rel="noreferrer"
                  >
                <div className="social-div">
                  <i class="fa-brands fa-github"></i>
                </div>
                </a>
                <a
                    href="https://www.instagram.com/_parth_96k_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                <div className="social-div">
                  <i class="fa-brands fa-instagram"></i>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className="contact-img-div">
              <img src={contactImg} alt="contact-img"></img>
            </div>
          </div>
          <section className="pt-3 pb-2 pb-lg-0~">
            <p className="text-white text-center mb-0">
              &copy; {copyrightDate}{" "}
              <span className="copyright-name">Parth Kale</span>. All rights
              reserved.
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default Contact;
