import cx from '@styles/MainStyle.module.scss';

const Footer = () => {
  return (
    <footer className={cx['footer-section']}>
        <div className={cx['footer-section--footer-div']}>
            <p className={cx['footer-section--text']}>Designed and developed by me</p>
            <p className={cx['footer-section--text']}>Contact#: <span className={cx['footer-section--span']}>09497636479</span></p>
            <p className={cx['footer-section--text']}>Email: <span className={cx['footer-section--span']}>pauljohnrdrgz@gmail.com</span></p>
        </div>
    </footer>
  )
}

export default Footer;