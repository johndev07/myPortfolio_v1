import React, { useEffect } from "react";
import { Stack, useMediaQuery } from "@mui/material";
import styles from "../styles/Aboutme.module.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import CountUp from "react-countup";
const Aboutme = () => {
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  return (
    <Stack className={styles.aboutSection} id="MyAbout">
      <Stack className={styles.heading}>
        <h3 data-aos="fade-up">Know Me More</h3>
      </Stack>
      <Stack>
        <Stack direction={isSmallScreen ? "column" : "row"}>
          <Stack className={styles.aboutmePara}>
            <h3 data-aos="fade-left">
              Hii I&apos;m <span>Alwyn john samuel</span>, a Web Developer
            </h3>
            <p data-aos="fade-up">
              I'm a passionate React developer with over 2.7 years of experience
              creating dynamic and responsive web applications. My journey began
              with a fascination for front-end development, and I've since honed
              my skills in React, Next.js, and Three.js
            </p>
            <p data-aos="fade-up">
              I thrive on building intuitive user experiences and enjoy
              leveraging the power of Next.js for server-side rendering and
              seamless routing. My experience with Three.js has allowed me to
              explore the exciting realm of 3D graphics, adding an innovative
              touch to my projects.
            </p>
          </Stack>
          <Stack className={styles.aboutList}>
            <ul>
              <li data-aos="fade-right">
                <b>Name:</b> Alwyn john Samuel
              </li>
              <li data-aos="fade-right">
                <b>Email:</b>{" "}
                <span>
                  <a href="mailto:name@email.com">alwynjohn.dev@gmail.com</a>
                </span>
              </li>
              <li data-aos="fade-right">
                <b>From:</b> Surat Gujarat
              </li>
            </ul>
            <a href="/resume/alwyn_john_resume.pdf" target="_blank">
              <button data-aos="fade-up">
                <FaCloudDownloadAlt />
                Download Resume
              </button>
            </a>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        className={styles.counter}
        justifyContent="space-evenly"
      >
        <div data-aos="fade-up">
          <span>
            <CountUp start={0} end={2.7} duration={2} suffix=" +" />
          </span>
          <h3>Year of Experience</h3>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <span>
            <CountUp start={0} end={12} duration={2} suffix=" +" />
          </span>
          <h3>Happy Clients</h3>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <span>
            <CountUp start={0} end={35} duration={2} suffix=" +" />
          </span>
          <h3>Project Completed</h3>
        </div>
      </Stack>
    </Stack>
  );
};

export default Aboutme;
