import { Stack } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar";
import styles from "../styles/work.module.css";

import Portfolio from "../components/Portfolio";
const Works = () => {
  return (
    <div className={styles.container}>
      <Stack direction="row">
        <Sidebar />
        <div className={styles.workSection}>
          <Portfolio />
        </div>
      </Stack>
    </div>
  );
};

export default Works;
