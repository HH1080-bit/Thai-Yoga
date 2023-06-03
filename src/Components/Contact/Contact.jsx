import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaRegAddressCard } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [isNameInvalid, setIsNameInvalid] = useState(false);

  const [mail, setMail] = useState("");
  const [isMailInValid, setIsMailValid] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleName = (e) => {
    const newName = e.target.value;

    setName(newName);
    if (name.trim().length < 4) {
      setIsNameInvalid(true);
    } else {
      setIsNameInvalid(false);
    }
  };
  const handleMail = (e) => {
    const newMail = e.target.value;
    setMail(newMail);
    if (mail.includes("@")) {
      setIsMailValid(true);
    } else {
      setIsMailValid(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/send-email", { name, mail });
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error  email:", error);
    }

    setName("");
    setMail("");
  };
  const inputErrorStyling = { border: "2px solid #dc3545" };
  const inputValidStyling = { border: "2px solid #198754" };

  return (
    <div className={styles.contact}>
      <div className="container">
        <h2 className="text-center text-light mb-5">Contact Us</h2>
        <div className="text-center">
          <span className="text-center text-light fw-bold d-block mb-3">
            Sign up for our newsletter to receive promotions and updates.
          </span>
          <form className="mb-5" onSubmit={handleSubmit}>
            <label className="text-light fw-bold">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="form-control w-50 mx-auto my-3"
              value={name}
              onChange={handleName}
              style={isNameInvalid ? inputErrorStyling : inputValidStyling}
            />
            {isNameInvalid && (
              <div className="text-danger mb-2">
                Name Must be At least Four Characters
              </div>
            )}
            <label className="text-light fw-bold">Your E-mail</label>
            <input
              type="email"
              className="form-control w-50 mx-auto my-3"
              name="email"
              required
              value={mail}
              onChange={handleMail}
            />
            {isMailInValid && (
              <div className="text-danger mb-2">Mail Must Contain @ </div>
            )}
            <input
              type="submit"
              value="Send"
              className="btn btn-success px-5 py-2 "
            />
          </form>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.692955103352!2d-81.24907742392112!3d42.98474117114176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef21caa628393%3A0x5cac6571f852687!2s246%20Dundas%20St%2C%20London%2C%20ON%20N6A%201H3%2C%20Canada!5e0!3m2!1sen!2seg!4v1685660762101!5m2!1sen!2seg"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-lg-6 text-light">
            <ul>
              <li>
                <FaRegAddressCard className="me-2" size={16} /> Adress:- 246
                Dundas St., London ON N6A 1H3{" "}
              </li>
              <li>
                <BsTelephone className="me-2" size={16} /> Phone:- 519-494-8424
              </li>
              <li>
                <FiMail className="me-2" size={16} /> Email:-
                info@harmonythaiyoga.ca
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
