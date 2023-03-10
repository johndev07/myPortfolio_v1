import React from "react";
import { Link, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineDown,
  AiFillCloseCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import styles from "../styles/sidebar.module.css";
import { TiSocialFacebook } from "react-icons/ti";
const Sidebar = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const { pathname } = router;
  function sidebarHandler() {
    setIsOpen((open) => !open);
    if (pathname === "/works") {
      router.push("/");
    }
    console.log(pathname);
    if (pathname === "/") {
      window.scrollTo(0, 0);
    }
  }

  return (
    <Stack
      className={`${styles.sidebar} ${isOpen ? styles.active : ""}`}
      alignItems="center"
      justifyContent="space-between"
    >
      <AiFillCloseCircle
        className={styles.close}
        onClick={() => setIsOpen((open) => !open)}
      />
      <Stack justifyContent="center" alignItems="center">
        <div className={styles.imgContainer}>
          <Image src="/images/profile.jpg" layout="fill" />
        </div>
        <h3>Alwyn John Samuel</h3>
      </Stack>
      <Stack>
        <ul>
          <li onClick={sidebarHandler}>Home</li>
          <li onClick={sidebarHandler}>
            <Link href="/#MyAbout">About me</Link>
          </li>
          <li onClick={sidebarHandler}>
            <Link href="/#Portfolio">Portfolio</Link>
          </li>
          <li onClick={sidebarHandler}>
            <Link href="/#Techstack">Tech Stack</Link>
          </li>
          <li onClick={sidebarHandler}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/johndev07"
            >
              Github profile
            </a>
          </li>
          <li onClick={sidebarHandler}>
            <a href="#contact" rel="noreferrer">
              Contacts
            </a>
          </li>
        </ul>
      </Stack>
      <Stack direction="row" className={styles.socialMedia}>
        <span>
          <TiSocialFacebook />
        </span>
        <span>
          <AiOutlineTwitter />
        </span>
        <span>
          <a
            href="https://wa.me/+918460344278"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineWhatsApp />
          </a>
        </span>
        <span>
          <AiFillGithub />
        </span>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
