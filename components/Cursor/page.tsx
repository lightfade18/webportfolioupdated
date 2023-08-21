'use client';

// imports
import React from 'react';
import cx from '@styles/MainStyle.module.scss';
import clsx from 'clsx';
import { useMedia } from 'react-use';
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

    const isTablet = useMedia('screen and (max-width: 1007px)', false);

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
            height: cursorVariant === 'focus' ? 32 : 13,
            width: cursorVariant === 'focus' ? 32 : 13,
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "rgb(212, 0, 0)",
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
            height: cursorVariant === 'focus' ? 24 : 9,
            width: cursorVariant === 'focus' ? 24 : 9,
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            backgroundColor: "rgb(212, 0, 0)",
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
            height: cursorVariant === 'focus' ? 16 : 5,
            width: cursorVariant === 'focus' ? 16 : 5,
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            backgroundColor: "rgb(212, 0, 0)",
            mixBlendMode: "difference"
        },
    };

    return (
        <>
        {!isTablet && 
        <motion.div 
            variants={variant}
            animate={cursorVariant}
            transition={{ duration: 0, ease: "easeInOut" }}
            className={clsx(cx['cursor'], {[cx['cursor--focus']] : (cursorVariant === 'focus')})}
        />
        }
        {!isTablet &&
        <motion.div
            variants={secondvariant}
            animate={cursorVariant}
            transition={{ duration: 0.05, ease: "easeInOut" }}
            className={clsx(cx['cursor--second'], {[cx['cursor--second--focus']] : (cursorVariant === 'focus')})}
        /> 
        }
        {!isTablet && 
        <motion.div
            variants={thirdvariant}
            animate={cursorVariant}
            transition={{ duration: 0.07, ease: "easeInOut" }}
            className={clsx(cx['cursor--third'], {[cx['cursor--third--focus']] : (cursorVariant === 'focus')})}
        />
        }
        </>
    )
}

export default Cursor;