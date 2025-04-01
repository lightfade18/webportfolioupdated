"use client";

// imports
import cx from "@styles/MainStyle.module.scss";
import { setCursorVariant } from "@utils/cursorState";
import { useState, useEffect } from "react";

// data
import dataValue from "@utils/data.json";

// Icons
import IconGmail from "@public/assests/icons/icon-gmail.svg";
import IconPhone from "@public/assests/icons/icon-phone.svg";

const Footer = () => {
  const cursorEnter = () => setCursorVariant("focus");
  const cursorLeave = () => setCursorVariant("default");

  const sourceCode: string =
    (
      dataValue.find((item) => item.name === "footerpage-details")
        ?.data?.[0] as any
    )?.sourcePath || "";

  const contact: string =
    (
      dataValue.find((item) => item.name === "footerpage-details")
        ?.data?.[0] as any
    )?.contact || "";

  const email: string =
    (
      dataValue.find((item) => item.name === "footerpage-details")
        ?.data?.[0] as any
    )?.email || "";

  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setTheme(currentTheme || "light");
  }, []);

  return (
    <footer className={cx["footer-section"]}>
      <div className={cx["footer-section--footer-div"]}>
        <p className={cx["footer-section--text"]}>
          COPYRIGHT © PAUL JOHN E. RODRIGUEZ 2025
        </p>
      </div>
      <div className={cx["footer-section--footer-div"]}>
        <p className={cx["footer-section--text"]}>
          <span>
            <IconPhone className={cx["footer-section--icon-phone"]} />
          </span>{" "}
          : <span className={cx["footer-section--span"]}>{contact}</span>
        </p>
        <p className={cx["footer-section--text"]}>
          <span>
            <IconGmail className={cx["footer-section--icon-gmail"]} />
          </span>{" "}
          : <span className={cx["footer-section--span"]}>{email}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
