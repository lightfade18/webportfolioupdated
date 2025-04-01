"use client";

// imports
import cx from "@styles/MainStyle.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { createSocialLink } from "@utils/createSocialLink";
import { useMedia } from "react-use";
import { setCursorVariant } from "@utils/cursorState";
import { motion } from "framer-motion";

// data
import dataValue from "@utils/data.json";

// Images
import profileimage from "@public/assests/images/profile-art.jpg";

// Icons
import IconFB from "@public/assests/icons/icon-fb.svg";
import IconTwitter from "@public/assests/icons/icon-twitter.svg";
import IconIG from "@public/assests/icons/icon-ig.svg";
import IconLinkedIn from "@public/assests/icons/icon-linked-in.svg";
import Typewriter from "@components/Typewriter/page";

const socialIcons = Object.create({
  facebook: <IconFB className={cx["socials-div--socials-icon"]} />,
  twitter: <IconTwitter className={cx["socials-div--socials-icon"]} />,
  instagram: <IconIG className={cx["socials-div--socials-icon"]} />,
  linkedin: <IconLinkedIn className={cx["socials-div--socials-icon"]} />,
});

const Header = () => {
  const isTablet = useMedia("screen and (max-width: 1007px)", false);

  const fields: string[] =
    dataValue
      .find((item) => item.name === "headerpage-details")
      ?.intro?.map((v) => v.value) ?? [];

  const socialLinks =
    dataValue.find((item) => item.name === "headerpage-details")?.socials || [];

  const cursorEnter = () => setCursorVariant("focus");
  const cursorLeave = () => setCursorVariant("default");

  return (
    <section className={cx["header-div"]}>
      <div
        className={clsx(cx["socials-div"], {
          [cx["socials-div-mobile"]]: isTablet,
        })}
      >
        <div
          className={clsx(cx["socials-div--grid"], {
            [cx["socials-div-mobile--grid"]]: isTablet,
          })}
        >
          {socialLinks.map((social) => (
            <motion.div
              key={social.name} // Adding the key here
              whileHover={{ y: -8 }} // Move upwards by 4px on hover
              transition={{ type: "spring", stiffness: 300, damping: 15 }} // Smooth transition effect
            >
              <a
                target="_blank"
                href={createSocialLink(social.name, social.url)}
                rel="noopener noreferrer"
                className={cx["socials-div--links"]}
                onMouseEnter={cursorEnter}
                onMouseLeave={cursorLeave}
              >
                {socialIcons[social.name]}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <div className={cx["header-div--style-box"]}></div>
      <div className={cx["header-div--content"]}>
        <div className={cx["header-div--image-div"]}>
          <Image
            src={profileimage}
            alt="Profile art image"
            width={500}
            height={undefined}
            priority
            className={cx["header-div--image-div--image"]}
          />
        </div>
        <div className={cx["header-div--info-div"]}>
          <div>
            <h1 className={clsx(cx["header-div--medium-font"])}>welcome!</h1>
            <div className={cx["wrapper"]}>
              <h1 className={cx["dynamic-text"]}>
                <Typewriter sentences={fields} />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
