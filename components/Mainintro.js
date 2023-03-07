import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import styles from "../styles/Mainintro.module.css";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronDoubleDown } from "react-icons/bs";
import { wordCarousel } from "../utils/type";
const Mainintro = ({ setIsOpen }) => {
  let z = 1;
  useEffect(() => {
    if (z === 1) {
      let wordTag = document.querySelector("#wordtype");
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
      <h3 data-aos="fade-up">Welcome</h3>
      <h1 data-aos="fade-up" data-aos-delay="500">
        I&#39; m <span id="wordtype"></span>
      </h1>
      <p data-aos="fade-up" data-aos-delay="1000">
        based in Surat, Gujarat
      </p>
      <button
        className={styles.hireMe}
        data-aos="fade-up"
        data-aos-delay="1500"
      >
        Hire Me
      </button>
      <a href="#MyAbout">
        <span className={styles.scrollBtn}>
          <BsChevronDoubleDown />
        </span>
      </a>
    </Stack>
  );
};

export default Mainintro;
