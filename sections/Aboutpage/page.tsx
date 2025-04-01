"use client";

// imports
import { useState } from "react";
import cx from "@styles/MainStyle.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Animator from "@components/Animator/page";
import animatorVariants from "@utils/animatorVariants";
import { animatorChildren } from "@utils/animators";
import { motion } from "framer-motion";
import { useMedia } from "react-use";
import { setCursorVariant } from "@utils/cursorState";

// data
import dataValue from "@utils/data.json";

const Aboutpage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const isMobile = useMedia("screen and (max-width: 640px)", false);

  const profilepic: string =
    (
      dataValue.find((item) => item.name === "aboutpage-details")
        ?.data?.[0] as any
    )?.profileImage || "";

  const name: string =
    (
      dataValue.find((item) => item.name === "aboutpage-details")
        ?.data?.[0] as any
    )?.name || "";

  const details1: string =
    (
      dataValue.find((item) => item.name === "aboutpage-details")
        ?.data?.[0] as any
    )?.details1 || "";

  const details2: string =
    (
      dataValue.find((item) => item.name === "aboutpage-details")
        ?.data?.[0] as any
    )?.details2 || "";

  const details3: string =
    (
      dataValue.find((item) => item.name === "aboutpage-details")
        ?.data?.[0] as any
    )?.details3 || "";

  const cvPath: string =
    (
      dataValue.find((item) => item.name === "aboutpage-details")
        ?.data?.[0] as any
    )?.cvPath || "";

  const cursorEnter = () => setCursorVariant("focus");
  const cursorLeave = () => setCursorVariant("default");

  const handlePrint = () => {
    window.open(cvPath);
  };

  return (
    <section id="about" className={cx["about-section"]}>
      <div className={cx["about-div"]}>
        <Animator variants={animatorVariants.motionDownToUpwChil()}>
          <div className={cx["about-content"]}>
            <motion.div variants={animatorChildren}>
              <h1 className={cx["about-div--about-main-font"]}>About Me</h1>
              <hr className={cx["about-div--hr"]} />
            </motion.div>
            <motion.div variants={animatorChildren}>
              <div className={cx["about-panel"]}>
                <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => setIsHovered(!isHovered)}
                  className={clsx(cx["about-panel--sample-div"])}
                >
                  <motion.div
                    animate={{
                      scale: 1,
                      x: isHovered ? "1rem" : 0,
                      y: isHovered ? "2rem" : 0,
                    }}
                    onMouseEnter={cursorEnter}
                    onMouseLeave={cursorLeave}
                    className={cx["frame-1"]}
                  >
                    <div
                      className={clsx(
                        cx["about-panel--sample-div--shadow-div"],
                        {
                          [cx["about-panel--sample-div--shadow-div--mobile"]]:
                            isMobile,
                        }
                      )}
                    ></div>
                  </motion.div>
                  <motion.div
                    animate={{
                      scale: 1,
                      x: isHovered ? "-2rem" : 0,
                    }}
                    onMouseEnter={cursorEnter}
                    onMouseLeave={cursorLeave}
                    className={cx["frame-2"]}
                  >
                    <div
                      className={clsx(cx["about-panel--sample-div--pic-div"], {
                        [cx["about-panel--sample-div--pic-div--mobile"]]:
                          isMobile,
                      })}
                    >
                      <Image
                        src={profilepic}
                        alt="Page logo"
                        width={isMobile ? 250 : 350}
                        height={isMobile ? 250 : 350}
                        className={cx["profile-image"]}
                      />
                    </div>
                  </motion.div>
                </div>
                <div className={cx["about-panel--info-div"]}>
                  <p className={cx["about-panel--about-details"]}>{details1}</p>
                  <p className={cx["about-panel--about-details"]}>{details2}</p>
                  <p className={cx["about-panel--about-details"]}>{details3}</p>
                  <button
                    onClick={handlePrint}
                    onMouseEnter={cursorEnter}
                    onMouseLeave={cursorLeave}
                    className={cx["about-panel--button"]}
                  >
                    Download my CV
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </Animator>
      </div>
    </section>
  );
};

export default Aboutpage;
