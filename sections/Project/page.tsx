'use client';

// imports
import cx from '@styles/MainStyle.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { setCursorVariant } from '@utils/cursorState';

// data
import dataValue from '@utils/data.json';

// Icons
import IconExternalLink from '@public/assests/icons/icon-external-link.svg';

const Project = () => {
  const projects: [string, string, string, string][] = (dataValue.find(item => item.name === 'projectsection-details')?.projects?.map(v => [v.id, v.title, v.key, v.imagePath])) || [];

  const [cardHover, setCardHover] = useState<boolean[]>(projects.map(() => false));

  const handleCardHover = (index: number, isHovering: boolean) => {
    const newCardHover = [...cardHover];
    newCardHover[index] = isHovering;
    setCardHover(newCardHover);
  };

  // Instead of one ref, create an array of refs, one for each card
  const refs = Array.from({ length: projects.length }).map(() => useRef(null));
  const isInView = refs.map((ref) => useInView(ref));

  const cursorEnter = () => setCursorVariant('focus');
  const cursorLeave = () => setCursorVariant('default');

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
              <Link 
                href={`projects/${url}`} 
                prefetch={false} 
                onMouseEnter={cursorEnter}
                onMouseLeave={cursorLeave}
              >
              <div 
                key={title}
                onMouseEnter={() => {handleCardHover(index, true); cursorEnter}}
                onMouseLeave={() => {handleCardHover(index, false); cursorLeave}}
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
                  sizes="(max-width: 768px) 187px,
                        (max-width: 1200px) 217px,
                        289px"
                  className={cx['proj-section--image']}
                />
                <IconExternalLink className={clsx(cx['proj-section--icon'], {[cx['proj-section--icon-hover']] : cardHover[index]})}/>,
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project;