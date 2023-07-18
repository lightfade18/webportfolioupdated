'use client';

import { useState } from 'react';
import cx from '@styles/MainStyle.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import profilepic from '@public/assests/images/profile-pic.jpg';
import Animator from '@components/Animator/page';
import animatorVariants from '@utils/animatorVariants';
import { motion } from 'framer-motion';
import { useMedia } from 'react-use';

const Aboutpage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const isMobile = useMedia('screen and (max-width: 640px)', false);

    return (
        <section className={cx['about-section']}>
            <div className={cx['about-div']}>
                <Animator variants={animatorVariants.motionZoomIn()}>
                    <div className={cx['about-content']}>
                        <h1 className={cx['about-div--main-font']}>About Me</h1>
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
                                            width={isMobile ? 300 : 350}
                                            height={undefined}
                                            priority
                                            className={cx['profile-image']}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quod modi quia suscipit voluptatem similique ipsa porro quas saepe. Dolorem, repellat laborum eligendi animi eaque nam ab veniam eius repudiandae.</p>
                            </div>
                        </div>
                    </div>
                </Animator>
            </div>
        </section>
    )
}

export default Aboutpage;