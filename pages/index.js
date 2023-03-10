import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Stack } from "@mui/material";
import Mainintro from "../components/Mainintro";
import Aboutme from "../components/Aboutme";
import Sidebar from "../components/Sidebar";
import Portfolio from "../components/Portfolio";
import Techstack from "../components/Techstack";
import Mainintrotest from "../components/Mainintrotest";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../components/Contact";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <Stack direction="row">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Stack className={styles.sectionList}>
            <Mainintrotest setIsOpen={setIsOpen} />
            {/* <Mainintro setIsOpen={setIsOpen} /> */}
            <Aboutme />
            <Portfolio />
            <Techstack />
            <Contact />
          </Stack>
        </Stack>
      </div>
    </>
  );
}
