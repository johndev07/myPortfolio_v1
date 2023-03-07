import styles from "../styles/Portfolio.module.css";
import { cards } from "../data/portfoliocard";
import Image from "next/image";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Portfolio() {
  const [portfolioData, setPortfolioData] = useState(cards);
  const { pathname } = useRouter();

  function filterData(category) {
    let filteredData =
      category === "all"
        ? cards
        : cards.filter((data) => {
            return data.category === category;
          });
    console.log(pathname === "/");
    let limitData = pathname === "/" ? filteredData.slice(0, 6) : filteredData;
    console.log(limitData);
    setPortfolioData(limitData);
  }
  function sortHandler(e) {
    if (e.target.tagName !== "LI") return;
    const child = e.currentTarget.querySelector(`.${styles.active}`);
    const category = e.target.dataset.category;
    child.classList.remove(styles["active"]);
    e.target.classList.add(styles["active"]);
    filterData(category);
  }

  useEffect(() => {
    filterData("all");
  }, []);

  return (
    <>
      <Stack id="Portfolio" className={styles.portfolio}>
        <h3>My Works</h3>
        <ul onClick={sortHandler}>
          <li data-category="all" className={styles.active}>
            All
          </li>
          <li data-category="css">css</li>
          <li data-category="js">js</li>
          <li data-category="react">react</li>
        </ul>
        <div className={styles.works}>
          {portfolioData.map((card, index) => {
            let { imgUrl, title, category, visit } = card;

            return (
              <div
                key={index}
                className={styles.card}
                data-aos="fade-up"
                data-aos-delay={`${100 * index}`}
              >
                <img src={imgUrl} alt={title} loading="lazy" />
                <div className={styles.cardbottom}>
                  <h4>{title}</h4>
                  <a href={visit} target="_blank" rel="noreferrer">
                    <button className={styles.visit}>visit</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {pathname === "/works" ? (
          ""
        ) : (
          <Link href="/works">
            <button className={styles.viewAll}>View All Works</button>
          </Link>
        )}
      </Stack>
    </>
  );
}

export default Portfolio;
