import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import styles from "../styles/Mainintrotest.module.css";
import ComputerCanvas from "./canvas/ComputerCanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import { wordCarousel } from "../utils/type";
const Mainintro = ({ setIsOpen }) => {
  let z = 1;
  useEffect(() => {
    if (z === 1) {
      let wordTag = document.querySelector("#wordtype");
      console.log(wordTag);
      let wordstart = wordCarousel(wordTag);
      z++;
    }
  }, []);
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
        <p data-aos="fade-up" data-aos-delay="400" id="wordtype"></p>
      </div>

      <ComputerCanvas />
    </Stack>
  );
};

export default Mainintro;
