import { Stack } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import styles from "../styles/work.module.css";

import Portfolio from "../components/Portfolio";
const Works = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Stack direction="row">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={styles.workSection}>
          <Portfolio />
        </div>
      </Stack>
    </div>
  );
};

export default Works;
