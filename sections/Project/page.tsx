'use client';

import cx from '@styles/MainStyle.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import type { StaticImageData } from 'next/image';

// Images
import webbuilder from '@public/assests/images/website-builder.png';
import listbuilder from '@public/assests/images/listing-presentation-builders.png';
import brgylogo from '@public/assests/images/brgy-logo.jpg';
import reallogo from '@public/assests/images/real-logo.png';

const projects: [string, StaticImageData, StaticImageData][] = [
  ['Real Listing Presentation Builder', webbuilder, reallogo],
  ['Real Website Builder', listbuilder, reallogo],
  ['Barangay Information Management System', listbuilder, brgylogo],
];

const Project = () => {
  const [cardHover, setCardHover] = useState<boolean[]>(projects.map(() => false));

  const handleCardHover = (index: number, isHovering: boolean) => {
    const newCardHover = [...cardHover];
    newCardHover[index] = isHovering;
    setCardHover(newCardHover);
  };

  return (
    <section className={cx['proj-section']}>
      <h1 className={cx['proj-section--main-font']}>My Recent Work</h1>
      <hr className={cx['proj-section--hr']}/>
      <h2 className={cx['proj-section--sub-font']}>Here are projects that I take a part of as a Sofware Engineer.</h2>
      <div className={cx['proj-section--proj-div']}>
        {projects.map(([title, path, logo], index) => (
          <div 
            key={title}
            onMouseEnter={() => handleCardHover(index, true)}
            onMouseLeave={() => handleCardHover(index, false)}
            onClick={() => handleCardHover(index, !cardHover[index])}
            className={cx['proj-section--card']}
          >
            <Image
              fill
              key={index}
              src={path}
              alt="logo 1"
              className={cx['proj-section--image']}
            />
            {typeof title === 'string' && (
              <div className={cx['proj-section--card-div']}>
                <Image
                  width={150}
                  height={undefined}
                  key={index}
                  src={logo}
                  alt="logo 2"
                  className='object-cover'
                />
              </div>
            )}
            <div key={`${index}-hover`} className={clsx(cx['proj-section--hidden'], {[cx['proj-section--cardhover']] : cardHover[index]})}>
              <button className={cx['proj-section--card-button']}>View more</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project;