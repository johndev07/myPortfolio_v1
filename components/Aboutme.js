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
              I&apos;m <span>Alwyn john samuel</span>, a Web Developer
            </h3>
            <p data-aos="fade-up">
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <p data-aos="fade-up">
              Delivering work within time and budget which meets client &apos;s
              requirements is our moto. Lorem Ipsum has been the industry
              &apos;s standard dummy text ever when an unknown printer took a
              galley.
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
            <CountUp start={0} end={1} duration={2} suffix=" +" />
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
