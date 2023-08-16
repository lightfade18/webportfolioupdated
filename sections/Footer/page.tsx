'use client';

// imports
import cx from '@styles/MainStyle.module.scss';

// Icons
import IconGithub from '@public/assests/icons/icon-github.svg';
import IconGmail from '@public/assests/icons/icon-gmail.svg';
import IconPhone from '@public/assests/icons/icon-phone.svg';

const sourceCode: string = 'https://github.com/lightfade18/portfolio-repo';

const Footer = () => {
  return (
    <footer className={cx['footer-section']}>
        <div className={cx['footer-section--source-div']}>
          <p className={cx['footer-section--text']}>View Source Code</p>
          <a 
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className={cx['footer-section--a-tag']}
          >
            <IconGithub className={cx['footer-section--icon']}/>
          </a>
        </div>
        <div className={cx['footer-section--footer-div']}>
            <p className={cx['footer-section--text']}>COPYRIGHT © PAUL JOHN E. RODRIGUEZ 2023</p>
            <p className={cx['footer-section--text']}><span><IconPhone className={cx['footer-section--icon-phone']}/></span> : <span className={cx['footer-section--span']}>09497636479</span></p>
            <p className={cx['footer-section--text']}><span><IconGmail className={cx['footer-section--icon-gmail']}/></span> : <span className={cx['footer-section--span']}>pauljohnrdrgz@gmail.com</span></p>
        </div>
    </footer>
  )
}

export default Footer;