import React, { useState } from "react";
import UseForm from "./UseForm";
import validate from "./FormValidate";
import successpic from "../../Assets/successpic.png";
import './Contact.css'

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const handleSuccessPic = () => {
    if (values.username && values.email && values.message) setSuccess(true);
  };
  const { values, handleChange, handleSubmit, errors } = UseForm(validate);

  return (
    <>
      <div className="container text-center text-light mb-5 my-5 contact_page">
        <div className="row contact_form my-3">
          <h1 className="mt-5"  style={{ color: "#50d890" }}>Let's Connect!</h1>
          <p>
            Fill this form or shoot me an email- <b>itsvvkhere@gmail.com</b>
          </p>
          <div className="col-lg-6 col-sm-6 my-3 contactPageRight">
            <form name="contact" method="POST" data-netlify="true">
              <div
                className="successImage"
                style={{ display: success ? "" : "none" }}
              >
                <br />
                <h3 className=" my-3 "> Sent Successfully! (^_^)</h3>
                <img src={successpic} alt="Sent Successfully!" /> <br />
              </div>
              <div
                className="feedbackForm"
                style={{ display: success ? "none" : "" }}
              >
                <br /> <h3 className=" my-3 " > Your message!</h3>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  autoComplete="off"
                />
                <div className="errorMessage">
                  {errors.username && <p>{errors.username}</p>}{" "}
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Your E-mail *"
                  required
                  autoComplete="off"
                />
                <div className="errorMessage">
                  {errors.email && <p>{errors.email}</p>}{" "}
                </div>
                <input
                  id="phone"
                  type="number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  autoComplete="off"
                />
                <div className="errorMessage">
                  {errors.phone && <p>{errors.phone}</p>}{" "}
                </div>
                <div>
                  <textarea
                    id="message"
                    type="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Your Message Here *"
                    rows="4"
                    required
                    autoComplete="off"
                  />
                  <div className="errorMessage">
                    {errors.message && <p>{errors.message}</p>}
                  </div>
                </div>
                <br />
                <div className="my-2">
                  <a className="mx-3 mb-3 border_button" href="#/">
                    <span
                      id="skew-fix"
                      className=""
                      type="submit"
                      onClick={() => {
                        handleSubmit();
                        handleSuccessPic();
                      }}
                    >
                      Send Message
                    </span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
