// 'use client';

// // imports
// import React from 'react';
// import cx from '@styles/MainStyle.module.scss';
// import clsx from 'clsx';
// import { getCursorVariant } from '@utils/cursorState';

// // framer-motion
// import { motion } from 'framer-motion';

// type CursorVariants = {
//     default: {
//       x: number;
//       y: number;
//     };
//     enlarge: {
//       height: number;
//       width: number;
//       x: number;
//       y: number;
//       backgroundColor?: any;
//       mixBlendMode?: any
//     };
// };

// const Cursor = () => {
//     const cursorVariant = getCursorVariant();
//     // const onNavVariant = getOnNavVariant();

//     console.log(cursorVariant);

//     const [mousePosition, setMousePosition] = React.useState({
//         x: 0,
//         y: 0
//     });

//     React.useEffect(() => {
//         const mouseMove = (e: any) => {
//             setMousePosition({
//                 x: e.clientX,
//                 y: e.clientY
//             });
//         };
//         window.addEventListener("mousemove", mouseMove);

//         return () => {
//             window.removeEventListener("mousemove", mouseMove);
//         };
//     }, []);

//     const variant: CursorVariants = {
//         default: {
//           x: mousePosition.x - 10,
//           y: mousePosition.y - 10,
//         },
//         enlarge: {
//             height: cursorVariant === 'enlarge' ? 30 : 20,
//             width: cursorVariant === 'enlarge' ? 30 : 20,
//             x: mousePosition.x - 15,
//             y: mousePosition.y - 15,
//             // backgroundColor: "white",
//             // mixBlendMode: "difference"
//         },
//     };
      
//     const secondvariant: CursorVariants = {
//         default: {
//           x: mousePosition.x - 7,
//           y: mousePosition.y - 7,
//         },
//         enlarge: {
//             height: cursorVariant === 'enlarge' ? 20 : 14,
//             width: cursorVariant === 'enlarge' ? 20 : 14,
//             x: mousePosition.x - 10,
//             y: mousePosition.y - 10,
//             // backgroundColor: "white",
//             // mixBlendMode: "difference"
//         },
//     };
      
//     const thirdvariant: CursorVariants = {
//         default: {
//           x: mousePosition.x - 4,
//           y: mousePosition.y - 4,
//         },
//         enlarge: {
//             height: cursorVariant === 'enlarge' ? 12 : 8,
//             width: cursorVariant === 'enlarge' ? 12 : 8,
//             x: mousePosition.x - 6,
//             y: mousePosition.y - 6,
//             // backgroundColor: "white",
//             // mixBlendMode: "difference"
//         },
//     };

//     return (
//         <>
//         <motion.div 
//             variants={variant}
//             animate={cursorVariant}
//             transition={{ duration: 0, ease: "easeInOut" }}
//             className={cx['cursor']}
//             // className={clsx(cx['cursor'], {[cx['cursor--on-nav']] : onNavVariant})}
//         />
//         <motion.div
//             variants={secondvariant}
//             animate={cursorVariant}
//             transition={{ duration: 0.05, ease: "easeInOut" }}
//             className={cx['cursor--second']}
//             // className={clsx(cx['cursor--second'], {[cx['cursor--second--on-nav']] : onNavVariant})}
//         />
//         <motion.div
//             variants={thirdvariant}
//             animate={cursorVariant}
//             transition={{ duration: 0.07, ease: "easeInOut" }}
//             className={cx['cursor--third']}
//             // className={clsx(cx['cursor--third'], {[cx['cursor--third--on-nav']] : onNavVariant})}
//         />
//         </>
//     )
// }

// export default Cursor;