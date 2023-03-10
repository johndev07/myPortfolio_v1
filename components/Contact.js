import { Stack } from "@mui/material";
import React from "react";
import styles from "../styles/Contact.module.css";
import EarthCanvas from "./canvas/EarthCanvas";
import StarCanvas from "./canvas/StarCanvas";
const Contact = () => {
  return (
    <Stack className={styles.contactSection} id="contact">
      <div className={styles.main}>
        <Stack className={styles.heading}>
          <h3 data-aos="fade-up">Get In Touch</h3>
        </Stack>
        <div className={styles.mainContainer}>
          <div className={styles.contactContainer}>
            <form className={styles.contactForm}>
              <input type="text" placeholder="Name" />
              <input type="number" placeholder="Phone No" />
              <textarea rows={6} placeholder="Message" />
              <input type="submit" value="Send" />
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
