import React, { useState } from "react";
import "../styles/contact.css";

import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import MailIcon from "@material-ui/icons/Mail";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import axios from "axios";

import * as yup from "yup";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrrors] = useState([]);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrrors([]);

    let schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().required().email(),
      message: yup
        .string()
        .required()
        .min(10, "Message must be at least 10 characters"),
    });

    // check validity
    schema
      .validate(formData, { abortEarly: false })
      .then((successData) => {
        const postData = {
          recipientName: successData.name,
          recipientEmail: successData.email,
          message: successData.message,
        };

        setFormErrrors([]);
        axios
          .post("http://localhost:5000/api/send-mail", postData)
          .then(function (response) {
            setIsEmailSent(true);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch((errors) => {
        console.log(errors);
        errors.inner.map((error) => {
          setFormErrrors((prevState) => [
            ...prevState,
            { label: error.path, error: true, errorMessage: error.message },
          ]);

          setFormData((prevState) => ({ ...prevState, [error.path]: "" }));
        });
      });
  };

  const isError = (label) => {
    const error = formErrors.find((obj) => obj.label === label);
    return error ? true : false;
  };

  const getError = (label) => {
    const error = formErrors.find((obj) => obj.label === label);
    return error && error.errorMessage;
  };

  return (
    <section className="section" id="contact">
      <div className="section__inner">
        <div className="section__intro">
          <h2 className="section__title">Contact</h2>
          <h5 className="section__description">Get in Touch</h5>
        </div>

        <div className="section__content">
          <div className="contact__info">
            <div className="info__card">
              <PhoneIcon />
              <h4>07908-632-224</h4>
            </div>

            <div className="info__card">
              <RoomIcon />
              <h4>London, Harlow</h4>
            </div>

            <div className="info__card">
              <MailIcon />
              <h4>callum@callumilett.com</h4>
            </div>

            <div className="info__card">
              <CheckCircleIcon />
              <h4>Freelance Available</h4>
            </div>
          </div>

          <div className="contact__main">
            <div className="section__row">
              <div className="section__column">
                <div className="contact__map">
                  <h3 className="section__subtitle">Find me on a map</h3>
                  <iframe
                    title="My Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39507.20168478324!2d0.07599704463498198!3d51.76594889754507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d89098ea9c95c5%3A0xbeebc5ba8ebf1690!2sHarlow!5e0!3m2!1sen!2suk!4v1600868918392!5m2!1sen!2suk"
                    width="420"
                    height="200"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
              <div className="section__column">
                <div className="contact__form">
                  <h3
                    style={{ display: isEmailSent && "none" }}
                    className="section__subtitle"
                  >
                    How Can I Help You?
                  </h3>
                  {isEmailSent && (
                    <h3 style={{ textAlign: "center", color: "#4085F0" }}>
                      Thank you for submitting the form, I will be in contact
                      soon!
                    </h3>
                  )}
                  <form
                    style={{ display: isEmailSent && "none" }}
                    className="form"
                    onSubmit={handleSubmit}
                  >
                    <div className="form__item">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form__input ${
                          isError("name") && "form__input--error"
                        }`}
                        placeholder={
                          isError("name") ? getError("name") : "Full Name"
                        }
                      />

                      <span className="form__error"></span>
                    </div>

                    <div className="form__item">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form__input ${
                          isError("email") && "form__input--error"
                        }`}
                        placeholder={
                          isError("email") ? getError("email") : "Email Address"
                        }
                      />
                    </div>

                    <div className="form__item">
                      <textarea
                        name="message"
                        maxLength="200"
                        className={`form__input ${
                          isError("message") && "form__input--error"
                        }`}
                        placeholder={
                          isError("message") ? getError("message") : "Message"
                        }
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="form__item">
                      <button type="submit" className="form__btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
