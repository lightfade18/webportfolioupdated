'use client';

// imports
import React from 'react'
import cx from '@styles/MainStyle.module.scss';
import clsx from 'clsx';

// svg
import IconSun from '@public/assests/icons/icon-sun.svg';
import IconMoon from '@public/assests/icons/icon-moon.svg';

interface themeSwitcherProps {
    decider: number,
    subpage: boolean
};

const ThemeSwitcher: React.FC<themeSwitcherProps> = ({decider, subpage}) => {
    const [isLight, setIsLight] = React.useState(true);

    const setDarkMode = () => {
        document.querySelector("body")?.setAttribute('data-theme', 'dark');
    };
    const setLightMode = () => {
        document.querySelector("body")?.setAttribute('data-theme', 'light');
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
        toggleTheme();
    }, []);

    return (
        <div
            onClick={toggleTheme}
        >
            {isLight ? 
            !subpage && <IconSun 
                className={
                    clsx(cx["icon-light"], 
                    {[cx["icon-light--scrolled"]] : decider > 0})
                }
            /> 
            : 
            !subpage && <IconMoon 
                className={
                    clsx(cx["icon-moon"], 
                    {[cx["icon-moon--scrolled"]] : decider > 0})
            }
            />}
        </div>
    )
}

export default ThemeSwitcher;