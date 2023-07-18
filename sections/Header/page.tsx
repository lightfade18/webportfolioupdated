'use client';

import cx from '@styles/MainStyle.module.scss';
import clsx from 'clsx';
import IconFB from '@public/assests/icons/icon-fb.svg';
import IconTwitter from '@public/assests/icons/icon-twitter.svg';
import IconIG from '@public/assests/icons/icon-ig.svg';
import IconLinkedIn from '@public/assests/icons/icon-linked-in.svg';
import { createSocialLink } from '@utils/createSocialLink';

const fields = [`I'm PJ Rodriguez`, `I'm a Fullstack Developer`, `I'm a Web Developer`]

const socialLinks = [
  ['facebook', 'pj.jumawanrodriguez'],
  ['twitter', 'Pj24987880'],
  ['instagram', 'pjrodriguez_18'],
  ['linkedin', 'paul-john-rodriguez-854706277'],
];

const socialIcons = Object.create({
  facebook: <IconFB className={cx['socials-div--socials-icon']}/>,
  twitter: <IconTwitter className={cx['socials-div--socials-icon']}/>,
  instagram: <IconIG className={cx['socials-div--socials-icon']}/>,
  linkedin: <IconLinkedIn className={cx['socials-div--socials-icon']}/>,
});

const Header = () => {

  return (
    <section className={cx['header-div']}>
      <div>
        <h1 className={clsx(cx['header-div--medium-font'])}>welcome!</h1>
        <div className={cx['wrapper']}>
          <ul className={cx['dynamic-text']}>
            {fields.map((item, index) => (
            <li 
              key={index}
              className={cx['lists-text']} 
              style={{ '--fields-length': fields.length } as React.CSSProperties}
            >
              <span 
                className={cx['span-text']} 
                style={{ '--item-length': item.length } as React.CSSProperties}
              >
                {item}
              </span>
            </li>
            ))}
          </ul>
        </div>
        <div className={cx['socials-div']}>
          {socialLinks.map(([key, link]) => (
            <a 
              key={key} 
              target="_blank" 
              href={createSocialLink(key, link)} 
              rel="noopener noreferrer"
            >
              {socialIcons[key]}
            </a>
          ))

          }
        </div>
      </div>
    </section>
  )
}

export default Header;