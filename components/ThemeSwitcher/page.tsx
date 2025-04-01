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
  // Initialize state based on the user's system preference
  const [isLight, setIsLight] = React.useState<boolean>(() => {
    if (typeof window !== "undefined") {
      // Check the user's system preference for dark mode
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return !prefersDarkMode; // If system prefers dark mode, set light mode to false
    }
    return true; // Default to light mode if no information is available
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
    // Apply the current theme on component mount based on the state
    if (isLight) {
      setLightMode();
    } else {
      setDarkMode();
    }
  }, [isLight]); // This ensures that theme is set whenever the state changes

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
