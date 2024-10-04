import { Stack } from "@mui/material";
import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import EarthCanvas from "./canvas/EarthCanvas";
import StarCanvas from "./canvas/StarCanvas";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xyyvnwoa");
  const [success, setSuccess] = useState(false);
  const [formFields, setFormFields] = useState({});
  function handleChange(e) {
    let z = { [e.target.name]: e.target.value };
    setFormFields((form) => ({ ...form, ...z }));
  }

  function contactSubmit(e) {
    e.preventDefault();
    const name_pattern = /^[a-zA-Z ]+$/;
    const phone_regex = /^[0-9]{10,13}$/;
    const match = name_pattern.test(formFields.name);
    const phone_match = phone_regex.test(formFields.phone);
    if (!match) {
      alert("please enter  a valid name");
    }
    if (!phone_match) {
      alert("please enter  a valid phone no");
    }
    if (match && phone_match) {
      handleSubmit(e).then(({ response }) => {
        if (response.status == 200) {
          setSuccess(true);
          setTimeout(() => {
            setSuccess((success) => !success);
          }, 4000);
        }
      });
    }
  }

  return (
    <Stack className={styles.contactSection} id="contact">
      <div className={styles.main}>
        <Stack className={styles.heading}>
          <h3 data-aos="fade-up">Get In Touch</h3>
        </Stack>
        <div className={styles.mainContainer}>
          <div className={styles.contactContainer}>
            <form
              method="POST"
              className={styles.contactForm}
              onSubmit={contactSubmit}
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                required
              />
              <input
                onChange={handleChange}
                type="tel"
                minLength="10"
                placeholder="Phone No"
                name="phone"
                required
                pattern="[0-9]{10,13}"
              />
              <textarea
                rows={6}
                placeholder="Message"
                name="message"
                required
              />
              <button type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending Mail..." : "Send"}
              </button>
              <p>
                {success &&
                  "Thanks you. Your form has been submitted sucessfully. Will get back to u soon  !"}
              </p>
            </form>
          </div>

          <div className={styles.contactCanvas}>
            <EarthCanvas />
          </div>
        </div>
      </div>
      <StarCanvas />
    </Stack>
  );
};

export default Contact;
