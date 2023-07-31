'use client';

import { useState } from 'react';
import cx from '@styles/MainStyle.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import Animator from '@components/Animator/page';
import animatorVariants from '@utils/animatorVariants';
import { animatorChildren, leftchild, rightchild, middlechild } from '@utils/animators';
import { motion } from 'framer-motion';
import { useMedia } from 'react-use';

// Images
import logo1 from '@public/assests/images/weblogo1.jpg';
import logo2 from '@public/assests/images/weblogo2.jpg';
import profilepic from '@public/assests/images/profile-pic.jpg';

// Icons
import IconNext from '@public/assests/icons/icon-nextjs.svg';
import IconReact from '@public/assests/icons/icon-reactjs.svg';
import IconTailwind from '@public/assests/icons/icon-tailwind.svg';
import IconBootstrap from '@public/assests/icons/icon-bootstrap.svg';
import IconJavascript from '@public/assests/icons/icon-javascript.svg';
import IconPython from '@public/assests/icons/icon-python.svg';
import IconPHP from '@public/assests/icons/icon-php.svg';
import IconJava from '@public/assests/icons/icon-java.svg';
import IconHTML from '@public/assests/icons/icon-html.svg';
import IconCSS from '@public/assests/icons/icon-css.svg';
import IconVSCode from '@public/assests/icons/icon-vscode.svg';
import IconGithub from '@public/assests/icons/icon-github.svg';
import IconJira from '@public/assests/icons/icon-jira.svg';
import IconNode from '@public/assests/icons/icon-nodejs.svg';
import IconSASS from '@public/assests/icons/icon-sass.svg';
import IconFramer from '@public/assests/icons/icon-framer.svg';
import IconPrisma from '@public/assests/icons/icon-prisma.svg';
import IconTypescript from '@public/assests/icons/icon-typescript.svg';


const name = 'Paul John Rodriguez';
const details = 'An aspiring Software Engineer, a music lover, an anime enthusiast, a coke addict, and a certified gamer. I always crave garlic with rice right after I wake up, and my favorite dish is sinigang. I am competitive when it comes to sports, and always ready to play a game of basketball.';
const frameworks = ['NextJS', 'ReactJS', 'Tailwind', 'Bootstrap', 'HTML', 'CSS', 'SASS', 'Framer', 'TypeScript'];
const proglang = ['JavaScript', 'Python', 'PHP', 'Java', 'NodeJS'];
const devtools = ['VSCode', 'Github', 'Jira', 'Prisma'];

const icons = Object.create({
    NextJS: <IconNext className={cx['tech-div--icon']}/>,
    ReactJS: <IconReact className={cx['tech-div--icon']}/>,
    Tailwind: <IconTailwind className={cx['tech-div--icon']}/>,
    Bootstrap: <IconBootstrap className={cx['tech-div--icon']}/>,
    JavaScript: <IconJavascript className={cx['tech-div--icon']}/>,
    Python: <IconPython className={cx['tech-div--icon']}/>,
    PHP: <IconPHP className={cx['tech-div--icon']}/>,
    Java: <IconJava className={cx['tech-div--icon']}/>,
    HTML: <IconHTML className={cx['tech-div--icon']}/>,
    CSS: <IconCSS className={cx['tech-div--icon']}/>,
    VSCode: <IconVSCode className={cx['tech-div--icon']}/>,
    Github: <IconGithub className={cx['tech-div--icon']}/>,
    Jira: <IconJira className={cx['tech-div--icon']}/>,
    NodeJS: <IconNode className={cx['tech-div--icon']}/>,
    SASS: <IconSASS className={cx['tech-div--icon']}/>,
    Framer: <IconFramer className={cx['tech-div--icon']}/>,
    Prisma: <IconPrisma className={cx['tech-div--icon']}/>,
    TypeScript: <IconTypescript className={cx['tech-div--icon']}/>,
});

const Aboutpage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isIconHovered, setIsIconHovered] = useState(false);
    const [iconHoverStates, setIconHoverStates] = useState<{ [key: string]: boolean }>({});

    const isMobile = useMedia('screen and (max-width: 640px)', false);

    const handleIconHover = (key: string, isIconHovered: boolean) => {
        setIconHoverStates((prevState) => ({
          ...prevState,
          [key]: isIconHovered,
        }));
    };

    const handlePrint = () => {
        window.open('assests/files/Rodriguez-PaulJohn-CV.pdf');
    };

    return (
        <section id='about' className={cx['about-section']}>
            <div className={cx['about-div']}>
                <Animator variants={animatorVariants.motionDownToUpwChil()}>
                    <div className={cx['about-content']}>
                        <motion.div variants={animatorChildren}>
                        <h1 className={cx['about-div--about-main-font']}>About Me</h1>
                        <hr className={cx['about-div--hr']}/>
                        </motion.div>
                        <motion.div variants={animatorChildren}>
                        <div className={cx['about-panel']}>
                            <div 
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onClick={() => setIsHovered(!isHovered)}
                                className={clsx(cx['about-panel--sample-div'])}
                            >
                                <motion.div
                                    animate={{
                                    scale: 1,
                                        x: isHovered ? '1rem' : 0,
                                        y: isHovered ? '2rem' : 0
                                    }}
                                    className={cx['frame-1']}
                                >
                                    <div className={clsx(cx['about-panel--sample-div--shadow-div'], {[cx['about-panel--sample-div--shadow-div--mobile']] : isMobile})}></div>
                                </motion.div>
                                <motion.div
                                    animate={{
                                    scale: 1,
                                        x: isHovered ? '-2rem' : 0
                                    }}
                                    className={cx['frame-2']}
                                >
                                    <div className={clsx(cx['about-panel--sample-div--pic-div'], {[cx['about-panel--sample-div--pic-div--mobile']] : isMobile})}>
                                        <Image
                                            src={profilepic}
                                            alt='Page logo'
                                            width={isMobile ? 250 : 350}
                                            height={undefined}
                                            priority
                                            className={cx['profile-image']}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                            <div className={cx['about-panel--info-div']}>
                                <h1 className={cx['about-panel--about-title']}>I am <span className={cx['about-panel--about-title--span']}>{name}</span></h1>
                                <p className={cx['about-panel--about-details']}>{details}</p>
                                <button 
                                    onClick={handlePrint}
                                    className={cx['about-panel--button']}
                                >
                                    Download my CV
                                </button>
                            </div>
                        </div>
                        </motion.div>
                    </div>
                </Animator>
            </div>
            <div className={cx['skills-div']}>
                <h1 className={cx['about-div--main-font']}>Technical Skill Set</h1>
                <hr className={cx['about-div--hr']}/>
                <div className={cx['tech-div']}>
                    <Animator
                        variants={animatorVariants.motionZoomInwChil()}
                        className={cx['tech-div--tech-box']}
                    >
                        <h1 className={cx['tech-div--title']}>Frontend</h1>
                        <div className={cx['tech-div--tech-list']}>
                        {frameworks.map((key) => (
                            <motion.div 
                                onMouseEnter={() => handleIconHover(key, true)}
                                onMouseLeave={() => handleIconHover(key, false)}
                                onClick={() => handleIconHover(key, !isIconHovered)}
                                key={key}
                                variants={leftchild}
                                className={cx['tech-div--list-item']}
                            >
                                <div
                                    className={cx['tech-div--container']}
                                >
                                    {icons[key]}
                                    <p className={clsx(cx['tech-div--details'], {[cx['tech-div--hidden']] : !iconHoverStates[key]})}>{key}</p>
                                </div>
                            </motion.div>
                        ))}
                        </div>
                    </Animator>
                    <Animator
                        variants={animatorVariants.motionZoomInwChil()}
                        className={cx['tech-div--tech-box']}
                    >
                        <h1 className={cx['tech-div--title']}>Backend</h1>
                        <div className={cx['tech-div--tech-list']}>
                        {proglang.map((key) => (
                            <motion.div 
                                onMouseEnter={() => handleIconHover(key, true)}
                                onMouseLeave={() => handleIconHover(key, false)}
                                onClick={() => handleIconHover(key, !isIconHovered)}
                                key={key}
                                variants={middlechild}
                                className={cx['tech-div--list-item']}
                            >
                                <div
                                    className={cx['tech-div--container']}
                                >
                                    {icons[key]}
                                    <p className={clsx(cx['tech-div--details'], {[cx['tech-div--hidden']] : !iconHoverStates[key]})}>{key}</p>
                                </div>
                            </motion.div>
                        ))}
                        </div>
                    </Animator>
                    <Animator
                        variants={animatorVariants.motionZoomInwChil()}
                        className={cx['tech-div--tech-box']}
                    >
                        <h1 className={cx['tech-div--title']}>Dev Tools</h1>
                        <div className={cx['tech-div--tech-list']}>
                        {devtools.map((key) => (
                            <motion.div 
                                onMouseEnter={() => handleIconHover(key, true)}
                                onMouseLeave={() => handleIconHover(key, false)}
                                onClick={() => handleIconHover(key, !isIconHovered)}
                                key={key}
                                variants={rightchild}
                                className={cx['tech-div--list-item']}
                            >
                                <div
                                    className={cx['tech-div--container']}
                                >
                                    {icons[key]}
                                    <p className={clsx(cx['tech-div--details'], {[cx['tech-div--hidden']] : !iconHoverStates[key]})}>{key}</p>
                                </div>
                            </motion.div>
                        ))}
                        </div>
                    </Animator>
                </div>
            </div>
        </section>
    )
}

export default Aboutpage;