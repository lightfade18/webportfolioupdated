"use client";

// imports
import React from "react";
import cx from "@styles/MainStyle.module.scss";
import clsx from "clsx";

// icons
import IconSun from "@public/assests/icons/icon-sun.svg";
import IconMoon from "@public/assests/icons/icon-moon.svg";

interface themeSwitcherProps {
  decider: number;
  subpage: boolean;
}

const ThemeSwitcher: React.FC<themeSwitcherProps> = ({ decider, subpage }) => {
  const [isLight, setIsLight] = React.useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return !prefersDarkMode;
    }
    return true;
  });

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };

  const toggleTheme = () => {
    if (isLight) {
      setLightMode();
    } else {
      setDarkMode();
    }
    setIsLight(!isLight);
  };

  React.useEffect(() => {
    if (isLight) {
      setLightMode();
    } else {
      setDarkMode();
    }
  }, [isLight]);

  return (
    <div onClick={toggleTheme}>
      {isLight
        ? !subpage && (
            <IconSun
              className={clsx(cx["icon-light"], {
                [cx["icon-light--scrolled"]]: decider > 0,
              })}
            />
          )
        : !subpage && (
            <IconMoon
              className={clsx(cx["icon-moon"], {
                [cx["icon-moon--scrolled"]]: decider > 0,
              })}
            />
          )}
    </div>
  );
};

export default ThemeSwitcher;
