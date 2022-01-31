import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import { IoIosArrowForward, IoLogoGithub } from "react-icons/io";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        <div className={styles["main-wrapper"]}>
          <div className={styles.hero}>
            <div className={styles.container}>
              <div>
                <h1 className={styles.title}>
                  <span className={styles.important}>Welcome</span> on board
                </h1>

                <div className={styles.actions}>
                  <Link
                    className={clsx(
                      "button",
                      "button--primary",
                      "button--lg",
                      styles["doc-button"]
                    )}
                    to="/docs/intro"
                  >
                    Read the docs
                    <IoIosArrowForward />
                  </Link>

                  <Link
                    href="https://github.com/anilkaraabali/raw-sass-architecture-structure"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      "button",
                      "button--secondary",
                      "button--lg",
                      styles["doc-button"],
                      styles["external-link"]
                    )}
                  >
                    Github
                    <IoLogoGithub />
                  </Link>
                </div>
              </div>

              <div>
                <img
                  src={useBaseUrl("/img/3d-hands-fun-and-wild-victory.png")}
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
