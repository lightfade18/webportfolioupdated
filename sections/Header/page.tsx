'use client';

import cx from '@styles/MainStyle.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import { createSocialLink } from '@utils/createSocialLink';
import { useMedia } from 'react-use';

// Images
import profileimage from '@public/assests/images/profile-art.jpg';

// Icons
import IconFB from '@public/assests/icons/icon-fb.svg';
import IconTwitter from '@public/assests/icons/icon-twitter.svg';
import IconIG from '@public/assests/icons/icon-ig.svg';
import IconLinkedIn from '@public/assests/icons/icon-linked-in.svg';
import Typewriter from '@components/Typewriter/page';

const fields = [`I'm PJ Rodriguez`, `I'm a Fullstack Developer`, `I'm a Web Developer`]

const socialLinks = [
  ['facebook', 'pj.jumawanrodriguez'],
  ['twitter', 'Pj24987880'],
  ['instagram', 'pjrodriguez_18'],
  ['linkedin', 'paul-john-rodriguez-57a927283'],
];

const socialIcons = Object.create({
  facebook: <IconFB className={cx['socials-div--socials-icon']}/>,
  twitter: <IconTwitter className={cx['socials-div--socials-icon']}/>,
  instagram: <IconIG className={cx['socials-div--socials-icon']}/>,
  linkedin: <IconLinkedIn className={cx['socials-div--socials-icon']}/>,
});

const Header = () => {
  const isMobile = useMedia('screen and (max-width: 640px)', false);

  return (
    <section className={cx['header-div']}>
      <div className={clsx(cx['socials-div'], {[cx['socials-div-mobile']] : isMobile})}>
        <div className={clsx(cx['socials-div--grid'], {[cx['socials-div-mobile--grid']] : isMobile})}>
          {socialLinks.map(([key, link]) => (
            <a 
              key={key} 
              target="_blank" 
              href={createSocialLink(key, link)}
              rel="noopener noreferrer"
            >
              {socialIcons[key]}
            </a>
          ))}
        </div>
      </div>
      <div className={cx['header-div--style-box']}></div>
      <div className={cx['header-div--content']}>
        <div className={cx['header-div--image-div']}>
          <Image
            src={profileimage}
            alt='Profile art image'
            width={500}
            height={undefined}
            priority
            className={cx['header-div--image-div--image']}
          />
        </div>
        <div className={cx['header-div--info-div']}>
          <div>
            <h1 className={clsx(cx['header-div--medium-font'])}>welcome!</h1>
            <div className={cx['wrapper']}>
              <h1 className={cx['dynamic-text']}><Typewriter sentences={fields}/></h1>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;