'use client';

import { FC } from "react";
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import cx from '@styles/MainStyle.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@public/assests/images/logo-pj.png';
import IconBurger from '@public/assests/icons/icon-burger.svg';
import IconClose from '@public/assests/icons/icon-close.svg';
import { Link as ScrollLink } from 'react-scroll';

const sections = ['Home', 'About', 'Certificates', 'Projects', 'Contact'];

interface navbarProps {
  decider: boolean,
};

const Navbar: FC<navbarProps> = ({decider}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [displayMenu, setDisplayMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      
    };
  }, []);
  

  return (
    <section className={clsx(cx['navbar'], {[cx['navbar--scrolled']]: (scrollPosition > 0) || displayMenu})}>
      <div className={cx['nav-container']}>
        {/* Desktop Nav */}
        <div className={clsx(cx['desktop-nav'], {[cx['desktop-nav--scrolled']]: (scrollPosition > 0) || displayMenu})}>
          <Image
            src={logo}
            alt='Page logo'
            width={60}
            height={undefined}
            priority
            className='object-cover'
          />
          <ul className='flex'>
            {sections.map((item, index) => (
                <li 
                  key={index} 
                  className='ml-[1rem]'
                >
                  {decider ? (
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className={cx['nav-links']}
                  >
                    {item}
                  </ScrollLink>
                  ) : (
                  <Link 
                    href={`../#${item.toLowerCase()}`} 
                    className={cx['nav-links']}
                  >
                    {item}
                  </Link>
                  )}
                </li>
            ))}
          </ul>
        </div>
        {/* Mobile Nav */}
        <div className={clsx(cx['mobile-nav'], {[cx['mobile-nav--scrolled']]: (scrollPosition > 0) || displayMenu})}>
          <Image
            src={logo}
            alt='Page logo'
            width={60}
            height={undefined}
            priority
            className='object-cover'
          />
          <button
            type='button'
            onClick={() => setDisplayMenu(!displayMenu)}
          >
            {!displayMenu ? 
            <IconBurger
              className={clsx('w-[2rem] h-[2rem] fill-white', {'!fill-black': (scrollPosition > 0) || displayMenu})}
            /> 
            :
            <IconClose
              className={clsx('w-[2rem] h-[2rem] fill-black')}
            />
            }
          </button>
        </div>
      </div>
      {/* Display Menu Panel */}
      {(displayMenu) && (
        <div className={cx['display-menu']}>
          <ul className='list-none text-black'>
            {sections.map((item, index) => (
            <li 
              key={index} 
              className='ml-[1rem] my-2'
            >
              {decider ? (
              <ScrollLink
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className={cx['nav-links']}
                onClick={() => setDisplayMenu(!displayMenu)}
              >
                {item}
              </ScrollLink>
              ) : (
              <Link 
                href={`../#${item.toLowerCase()}`} 
                className={cx['nav-links']}
              >
                {item}
              </Link>
              )}
            </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default Navbar;