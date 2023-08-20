'use client';

// imports
import React from 'react';
import cx from '@styles/MainStyle.module.scss';
import clsx from 'clsx';
import { getCursorVariant } from '@utils/cursorState';

// framer-motion
import { motion } from 'framer-motion';

type CursorVariants = {
    default: {
      x: number;
      y: number;
      rotate: number;
    };
    focus: {
      height: number;
      width: number;
      x: number;
      y: number;
      backgroundColor?: any;
      mixBlendMode?: any
    };
};

const Cursor = () => {
    const cursorVariant = getCursorVariant();

    const [mousePosition, setMousePosition] = React.useState({
        x: 0,
        y: 0
    });

    React.useEffect(() => {
        const mouseMove = (e: any) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variant: CursorVariants = {
        default: {
          x: mousePosition.x - 6.5,
          y: mousePosition.y - 6.5,
          rotate: 45
        },
        focus: {
            height: cursorVariant === 'focus' ? 26 : 13,
            width: cursorVariant === 'focus' ? 26 : 13,
            x: mousePosition.x - 13,
            y: mousePosition.y - 13,
            backgroundColor: "white",
            mixBlendMode: "difference"
        },
    };
      
    const secondvariant: CursorVariants = {
        default: {
          x: mousePosition.x - 4.5,
          y: mousePosition.y - 4.5,
          rotate: 45
        },
        focus: {
            height: cursorVariant === 'focus' ? 18 : 9,
            width: cursorVariant === 'focus' ? 18 : 9,
            x: mousePosition.x - 9,
            y: mousePosition.y - 9,
            backgroundColor: "white",
            mixBlendMode: "difference"
        },
    };
      
    const thirdvariant: CursorVariants = {
        default: {
          x: mousePosition.x - 2.5,
          y: mousePosition.y - 2.5,
          rotate: 45
        },
        focus: {
            height: cursorVariant === 'focus' ? 10 : 5,
            width: cursorVariant === 'focus' ? 10 : 5,
            x: mousePosition.x - 5,
            y: mousePosition.y - 5,
            backgroundColor: "white",
            mixBlendMode: "difference"
        },
    };

    return (
        <>
        <motion.div 
            variants={variant}
            animate={cursorVariant}
            transition={{ duration: 0, ease: "easeInOut" }}
            className={clsx(cx['cursor'], {[cx['cursor--focus']] : (cursorVariant === 'focus')})}
        />
        <motion.div
            variants={secondvariant}
            animate={cursorVariant}
            transition={{ duration: 0.05, ease: "easeInOut" }}
            className={clsx(cx['cursor--second'], {[cx['cursor--second--focus']] : (cursorVariant === 'focus')})}
        />
        <motion.div
            variants={thirdvariant}
            animate={cursorVariant}
            transition={{ duration: 0.07, ease: "easeInOut" }}
            className={clsx(cx['cursor--third'], {[cx['cursor--third--focus']] : (cursorVariant === 'focus')})}
        />
        </>
    )
}

export default Cursor;