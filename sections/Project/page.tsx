'use client';

import cx from '@styles/MainStyle.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import { useState, useRef } from 'react';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

// Images
import webbuilder from '@public/assests/images/website-builder.png';
import listbuilder from '@public/assests/images/listing-presentation-builders.png';
import bmis from '@public/assests/images/bmis-1.png';



// project data [id, title, indicator, path, logo]
export const projects: [string, string, string, StaticImageData][] = [
  ['clkh2w8y70000bcvjctn8eyk4', 'Real Listing Presentation Builder', 'listing', webbuilder],
  ['clkh2whog0002bcvje4yu0ax1', 'Real Website Builder', 'builder', listbuilder],
  ['clkh2wlg50004bcvjgl8qe0ge', 'Barangay Information Management System', 'bmis', bmis],
];

const Project = () => {
  const [cardHover, setCardHover] = useState<boolean[]>(projects.map(() => false));

  const handleCardHover = (index: number, isHovering: boolean) => {
    const newCardHover = [...cardHover];
    newCardHover[index] = isHovering;
    setCardHover(newCardHover);
  };

  // Instead of one ref, create an array of refs, one for each card
  const refs = Array.from({ length: projects.length }).map(() => useRef(null));
  const isInView = refs.map((ref) => useInView(ref));

  return (
    <section className={cx['proj-section']}>
      <div className={cx['proj-section--main-div']}>
        <h1 className={cx['proj-section--main-font']}>My Recent Work</h1>
        <hr className={cx['proj-section--hr']}/>
        <h2 className={cx['proj-section--sub-font']}>Here are projects that I take a part of as a Sofware Engineer.</h2>
        <div className={cx['proj-section--proj-div']}>
          
          {projects.map(([url, title, indicator, path], index) => (
            <div  key={url}>
              <div className={cx['proj-section--title-div']}>
                <h2 className={cx['proj-section--title']}>{title}</h2>
                <motion.div
                    ref={refs[index]}
                    initial={{ width: 0 }} // Set initial width to 0 to animate from left
                    animate={isInView[index] ? { width: "100%" } : { width: 0 }} // Set animate width to 100% to animate to right
                    transition={isInView[index] ? { duration: 5 } : { duration: 0.5 } } // Animation duration in seconds
                >
                    <hr className={cx['proj-section--title-hr']}/>
                </motion.div>
              </div>
              <div 
                key={title}
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
                onClick={() => handleCardHover(index, !cardHover[index])}
                className={clsx(
                  cx['proj-section--card'],
                  { [cx['proj-section--card-hovered']]: cardHover[index] }
                )}
              >
                <Image
                  fill
                  key={index}
                  src={path}
                  alt="logo 1"
                  className={cx['proj-section--image']}
                />
                <Link href={`projects/${url}`} className={clsx(cx['proj-section--card-button-hidden'], {[cx['proj-section--card-button']]: cardHover[index]})}>View more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project;