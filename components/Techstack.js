import React from "react";
import { Stack } from "@mui/material";
import { techStackData } from "../data/techStackData";
import styles from "../styles/Techstack.module.css";
const Techstack = () => {
  return (
    <>
      <Stack id="Techstack" className={styles.techstack}>
        <h3 data-aos="fade-up">Techstack</h3>
        <div className={styles.techlist}>
          {techStackData.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${200 * index}`}
              >
                {item.icon}
                <h5>{item.techName}</h5>
              </div>
            );
          })}
        </div>
      </Stack>
    </>
  );
};

export default Techstack;
