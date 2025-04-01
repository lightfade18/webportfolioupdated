"use client";

// imports
import { useState } from "react";
import cx from "@styles/MainStyle.module.scss";
import clsx from "clsx";
import Animator from "@components/Animator/page";
import animatorVariants from "@utils/animatorVariants";
import { leftchild, rightchild, middlechild } from "@utils/animators";
import { motion, useInView } from "framer-motion";
import { useMedia } from "react-use";
import { setCursorVariant } from "@utils/cursorState";

// data
import dataValue from "@utils/data.json";

// Icons
import IconNext from "@public/assests/icons/icon-nextjs.svg";
import IconReact from "@public/assests/icons/icon-reactjs.svg";
import IconTailwind from "@public/assests/icons/icon-tailwind.svg";
import IconBootstrap from "@public/assests/icons/icon-bootstrap.svg";
import IconJavascript from "@public/assests/icons/icon-javascript.svg";
import IconPython from "@public/assests/icons/icon-python.svg";
import IconPHP from "@public/assests/icons/icon-php.svg";
import IconJava from "@public/assests/icons/icon-java.svg";
import IconHTML from "@public/assests/icons/icon-html.svg";
import IconCSS from "@public/assests/icons/icon-css.svg";
import IconVSCode from "@public/assests/icons/icon-vscode.svg";
import IconGithub from "@public/assests/icons/icon-github.svg";
import IconJira from "@public/assests/icons/icon-jira.svg";
import IconNode from "@public/assests/icons/icon-nodejs.svg";
import IconSASS from "@public/assests/icons/icon-sass.svg";
import IconFramer from "@public/assests/icons/icon-framer.svg";
import IconPrisma from "@public/assests/icons/icon-prisma.svg";
import IconTypescript from "@public/assests/icons/icon-typescript.svg";

const icons = Object.create({
  NextJS: <IconNext className={cx["tech-div--icon"]} />,
  ReactJS: <IconReact className={cx["tech-div--icon"]} />,
  Tailwind: <IconTailwind className={cx["tech-div--icon"]} />,
  Bootstrap: <IconBootstrap className={cx["tech-div--icon"]} />,
  JavaScript: <IconJavascript className={cx["tech-div--icon"]} />,
  Python: <IconPython className={cx["tech-div--icon"]} />,
  PHP: <IconPHP className={cx["tech-div--icon"]} />,
  Java: <IconJava className={cx["tech-div--icon"]} />,
  HTML: <IconHTML className={cx["tech-div--icon"]} />,
  CSS: <IconCSS className={cx["tech-div--icon"]} />,
  VSCode: <IconVSCode className={cx["tech-div--icon"]} />,
  Github: <IconGithub className={cx["tech-div--icon"]} />,
  Jira: <IconJira className={cx["tech-div--icon"]} />,
  NodeJS: <IconNode className={cx["tech-div--icon"]} />,
  SASS: <IconSASS className={cx["tech-div--icon"]} />,
  Framer: <IconFramer className={cx["tech-div--icon"]} />,
  Prisma: <IconPrisma className={cx["tech-div--icon"]} />,
  TypeScript: <IconTypescript className={cx["tech-div--icon"]} />,
});

const Skills = () => {
  const [isIconHovered, setIsIconHovered] = useState(false);
  const [iconHoverStates, setIconHoverStates] = useState<{
    [key: string]: boolean;
  }>({});

  const isMobile = useMedia("screen and (max-width: 640px)", false);

  const frontend: string[] =
    (
      dataValue.find((item) => item.name === "aboutpage-details")
        ?.data?.[0] as any
    )?.frontend.map((v: any) => v.value) || [];

  const backend: string[] =
    (
      dataValue.find((item) => item.name === "aboutpage-details")
        ?.data?.[0] as any
    )?.backend.map((v: any) => v.value) || [];

  const devtools: string[] =
    (
      dataValue.find((item) => item.name === "aboutpage-details")
        ?.data?.[0] as any
    )?.devtools.map((v: any) => v.value) || [];

  const handleIconHover = (key: string, isIconHovered: boolean) => {
    setIconHoverStates((prevState) => ({
      ...prevState,
      [key]: isIconHovered,
    }));
  };

  const cursorEnter = () => setCursorVariant("focus");
  const cursorLeave = () => setCursorVariant("default");

  return (
    <section>
      <div className={cx["skills-div"]}>
        <h1 className={cx["about-div--about-main-font"]}>
          Technical Skill Set
        </h1>
        <hr className={cx["about-div--hr"]} />
        <div className={cx["tech-div"]}>
          <Animator
            variants={animatorVariants.motionZoomInwChil()}
            className={cx["tech-div--tech-box"]}
          >
            <h1 className={cx["tech-div--title"]}>Frontend</h1>
            <div className={cx["tech-div--tech-list"]}>
              {frontend.map((key: any) => (
                <motion.div
                  onMouseEnter={() => {
                    handleIconHover(key, true);
                    cursorEnter;
                  }}
                  onMouseLeave={() => {
                    handleIconHover(key, false);
                    cursorLeave;
                  }}
                  onClick={() => handleIconHover(key, !isIconHovered)}
                  key={key}
                  variants={leftchild}
                  className={cx["tech-div--list-item"]}
                >
                  <div
                    onMouseEnter={cursorEnter}
                    onMouseLeave={cursorLeave}
                    className={cx["tech-div--container"]}
                  >
                    {icons[key]}
                    <p
                      className={clsx(cx["tech-div--details"], {
                        [cx["tech-div--hidden"]]: !iconHoverStates[key],
                      })}
                    >
                      {key}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Animator>
          <Animator
            variants={animatorVariants.motionZoomInwChil()}
            className={cx["tech-div--tech-box"]}
          >
            <h1 className={cx["tech-div--title"]}>Backend</h1>
            <div className={cx["tech-div--tech-list"]}>
              {backend.map((key: any) => (
                <motion.div
                  onMouseEnter={() => {
                    handleIconHover(key, true);
                    cursorEnter;
                  }}
                  onMouseLeave={() => {
                    handleIconHover(key, false);
                    cursorLeave;
                  }}
                  onClick={() => handleIconHover(key, !isIconHovered)}
                  key={key}
                  variants={middlechild}
                  className={cx["tech-div--list-item"]}
                >
                  <div
                    onMouseEnter={cursorEnter}
                    onMouseLeave={cursorLeave}
                    className={cx["tech-div--container"]}
                  >
                    {icons[key]}
                    <p
                      className={clsx(cx["tech-div--details"], {
                        [cx["tech-div--hidden"]]: !iconHoverStates[key],
                      })}
                    >
                      {key}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Animator>
          <Animator
            variants={animatorVariants.motionZoomInwChil()}
            className={cx["tech-div--tech-box"]}
          >
            <h1 className={cx["tech-div--title"]}>Dev Tools</h1>
            <div className={cx["tech-div--tech-list"]}>
              {devtools.map((key: any) => (
                <motion.div
                  onMouseEnter={() => {
                    handleIconHover(key, true);
                    cursorEnter;
                  }}
                  onMouseLeave={() => {
                    handleIconHover(key, false);
                    cursorLeave;
                  }}
                  onClick={() => handleIconHover(key, !isIconHovered)}
                  key={key}
                  variants={rightchild}
                  className={cx["tech-div--list-item"]}
                >
                  <div
                    onMouseEnter={cursorEnter}
                    onMouseLeave={cursorLeave}
                    className={cx["tech-div--container"]}
                  >
                    {icons[key]}
                    <p
                      className={clsx(cx["tech-div--details"], {
                        [cx["tech-div--hidden"]]: !iconHoverStates[key],
                      })}
                    >
                      {key}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Animator>
        </div>
      </div>
    </section>
  );
};

export default Skills;
