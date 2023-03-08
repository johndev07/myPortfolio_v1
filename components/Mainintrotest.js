import React from "react";
import { Stack } from "@mui/material";
import styles from "../styles/Mainintrotest.module.css";
import ComputerCanvas from "./canvas/ComputerCanvas";
import { GiHamburgerMenu } from "react-icons/gi";
const Mainintro = ({ setIsOpen }) => {
  return (
    <Stack
      id="Home"
      className={styles.mainContent}
      justifyContent="center"
      alignItems="center"
    >
      <GiHamburgerMenu
        className={styles.hamburger}
        onClick={() => setIsOpen((open) => !open)}
      />
      <div className={styles.heading}>
        <h2 data-aos="fade-up" data-aos-delay="200">
          Hi I&apos;m <span>ALWYN JOHN</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="400">
          I Develop user interfaces and web applications
        </p>
      </div>

      <ComputerCanvas />
    </Stack>
  );
};

export default Mainintro;
