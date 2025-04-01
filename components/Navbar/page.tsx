"use client";

// imports
import { FC } from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import cx from "@styles/MainStyle.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { setCursorVariant } from "@utils/cursorState";
import ThemeSwitcher from "@components/ThemeSwitcher/page";

// images
import logo from "@public/assests/images/logo-pj.png";

// svg
import IconBurger from "@public/assests/icons/icon-burger.svg";
import IconClose from "@public/assests/icons/icon-close.svg";

const sections = [
  "Home",
  "Experience",
  "Skills",
  "Projects",
  "Certificates",
  "About",
];

interface navbarProps {
  decider: boolean;
}

// needs parameter to use whether it will use ScrollLink or Link - {decider prop}
const Navbar: FC<navbarProps> = ({ decider }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [displayMenu, setDisplayMenu] = useState(false);

  const cursorEnter = () => setCursorVariant("focus");
  const cursorLeave = () => setCursorVariant("default");

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Disable scrolling when the mobile menu is active
  useEffect(() => {
    if (displayMenu) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Re-enable scroll when menu is closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scroll is re-enabled when component unmounts
    };
  }, [displayMenu]);

  return (
    <section
      className={clsx(cx["navbar"], {
        [cx["navbar--scrolled"]]: scrollPosition > 0 || displayMenu,
      })}
    >
      <div className={cx["nav-container"]}>
        {/* Desktop Nav */}
        <div
          className={clsx(cx["desktop-nav"], {
            [cx["desktop-nav--scrolled"]]: scrollPosition > 0 || displayMenu,
          })}
        >
          <Image
            src={logo}
            alt="Page logo"
            width={60}
            height={undefined}
            priority
            className="object-cover"
          />
          <ul className="flex items-center">
            {sections.map((item, index) => (
              <motion.div
                key={item} // Using the section name as a unique key
                whileHover={{ y: -4 }} // Move upwards by 4px on hover
                transition={{ type: "spring", stiffness: 300, damping: 15 }} // Smooth transition effect
              >
                <li
                  key={index} // This is redundant, as we already use the item as the key above
                  className="ml-[1rem]"
                  onMouseEnter={cursorEnter}
                  onMouseLeave={cursorLeave}
                >
                  {decider ? (
                    <ScrollLink
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className={cx["nav-links"]}
                    >
                      {item}
                    </ScrollLink>
                  ) : (
                    <Link
                      href={`../#${item.toLowerCase()}`}
                      className={cx["nav-links"]}
                    >
                      {item}
                    </Link>
                  )}
                </li>
              </motion.div>
            ))}
            <li onMouseEnter={cursorEnter} onMouseLeave={cursorLeave}>
              <ThemeSwitcher decider={scrollPosition} subpage={displayMenu} />
            </li>
          </ul>
        </div>
        {/* Mobile Nav */}
        <div
          className={clsx(cx["mobile-nav"], {
            [cx["mobile-nav--scrolled"]]: scrollPosition > 0 || displayMenu,
          })}
        >
          <Image
            src={logo}
            alt="Page logo"
            width={60}
            height={undefined}
            priority
            className="object-cover"
          />
          <div className="flex items-center gap-4">
            <ThemeSwitcher decider={scrollPosition} subpage={displayMenu} />
            <button type="button" onClick={() => setDisplayMenu(!displayMenu)}>
              {!displayMenu ? (
                <IconBurger className={clsx(cx["burger-icon"])} />
              ) : (
                <IconClose className={clsx(cx["close-icon"])} />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Display Menu Panel */}
      {displayMenu && (
        <div className={cx["display-menu"]}>
          <ul className="list-none text-black">
            {sections.map((item, index) => (
              <li key={index} className="ml-[1rem] my-2">
                {decider ? (
                  // using react-scroll for smoother transition
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className={cx["nav-links"]}
                    onClick={() => setDisplayMenu(!displayMenu)}
                  >
                    {item}
                  </ScrollLink>
                ) : (
                  // using routing to go targeted div id from another page
                  <Link
                    href={`../#${item.toLowerCase()}`}
                    className={cx["nav-links"]}
                  >
                    {item}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
