// Uses dynamic routing
'use client';

// imports
import { FC, useState, useRef } from "react";
import cx from '@styles/MainStyle.module.scss';
import clsx from "clsx";
import Navbar from "@components/Navbar/page";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from 'framer-motion';
import { setCursorVariant } from '@utils/cursorState';
import { createSocialLink } from "@utils/createSocialLink";

// data
import dataValue from '@utils/data.json';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Icons
import IconOpentab from '@public/assests/icons/icon-opentab.svg';

interface pageProps {
    params: {projects: string}
}

const page: FC<pageProps> = ({params}) => {
    const newTitlesArray: string[] = (dataValue.find(item => item.name === 'projectsection-details')?.projects?.map(v => v.id)) || [];

    const [isHovered, setIsHovered] = useState({
        website: false,
        github: false,
    });

    const ref = useRef(null);
    const isInView = useInView(ref);

    const newTitle: string = (dataValue.find(item => item.name === 'projectsection-details')?.projects?.find(v => v.id === params.projects)?.title) || '';
    const indicator: string = (dataValue.find(item => item.name === 'projectsection-details')?.projects?.find(v => v.id === params.projects)?.key) || '';
    const url: string = (dataValue.find(item => item.name === 'projectsection-details')?.projects?.find(v => v.id === params.projects)?.url) || '';
    const githubUrl: string = (dataValue.find(item => item.name === 'projectsection-details')?.projects?.find(v => v.id === params.projects)?.guthubUrl) || '';
    const description: string = (dataValue.find(item => item.name === 'projectsection-details')?.projects?.find(v => v.id === params.projects)?.description) || '';
    const role: string = (dataValue.find(item => item.name === 'projectsection-details')?.projects?.find(v => v.id === params.projects)?.role) || '';
    const responsibilities: string = (dataValue.find(item => item.name === 'projectsection-details')?.projects?.find(v => v.id === params.projects)?.responsibilities) || '';
    const projectExists: boolean = newTitlesArray.includes(params.projects);
    const techstack: { tech: string; }[] | undefined = (dataValue.find(item => item.name === 'projectsection-details')?.projects?.find(v => v.id === params.projects)?.teckstack);
    const images: { projectImagePath: string }[] | undefined = (dataValue.find(item => item.name === 'projectsection-details')?.projects?.find(v => v.id === params.projects)?.images);

    const cursorEnter = () => setCursorVariant('focus');
    const cursorLeave = () => setCursorVariant('default');

    return (
        <div className={cx['projects-section']}>
            <Navbar
                decider={false}
            />
            <section className={cx['projects-section--content']}>
                {!projectExists ? (
                <div className={cx['projects-section--invalid-div']}>
                    <div>
                        <h1 className={cx['projects-section--invalid-div--font']}>Invalid Project URL</h1>
                        <Link 
                            onMouseEnter={cursorEnter}
                            onMouseLeave={cursorLeave}
                            href='../#' className={cx['projects-section--invalid-div--link']}
                        >
                            Home
                        </Link>
                    </div>
                </div>
                ) : (
                <div className={cx['projects-section--proj-div']}>
                    <Swiper
                        effect={'coverflow'}
                        slidesPerView={'auto'}
                        autoplay={{ delay: 3000, disableOnInteraction: false, }}
                        centeredSlides={true}
                        spaceBetween={24}
                        loop={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                          }}
                        draggable={false}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                    >
                        {images?.map((item, index) => (
                            <SwiperSlide key={index} className={cx['projects-section--slide']}>
                                <Image
                                    src={item.projectImagePath}
                                    alt={`${indicator} photo ${index}`}
                                    fill
                                    sizes="(max-width: 768px) 187px,
                                        (max-width: 1200px) 217px,
                                        289px"
                                    className='object-cover'
                                />
                            </SwiperSlide>
                        ))}          
                    </Swiper>
                    <div className="bg-transparent">
                        <div className={cx['projects-section--details-div']}>
                            <h1 className={cx['projects-section--details-div--title']}>{newTitle}</h1>
                            <div 
                                onMouseEnter={cursorEnter}
                                onMouseLeave={cursorLeave}
                                className={cx['projects-section--button-div']}
                            >
                                <a 
                                    href={createSocialLink('normal', url)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cx['projects-section--link-button']}
                                    onMouseEnter={() => setIsHovered({ ...isHovered, website: true })}
                                    onMouseLeave={() => setIsHovered({ ...isHovered, website: false })}
                                    onClick={() => setIsHovered({ ...isHovered, website: !isHovered.website })}
                                >
                                    <p>Visit Website</p><IconOpentab className={clsx(cx['projects-section--icon'], {'!fill-white': isHovered.website})}/>
                                </a>
                                {githubUrl && (
                                    <a 
                                        href={createSocialLink('github', githubUrl)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cx['projects-section--link-button']}
                                        onMouseEnter={() => setIsHovered({ ...isHovered, github: true })}
                                        onMouseLeave={() => setIsHovered({ ...isHovered, github: false })}
                                        onClick={() => setIsHovered({ ...isHovered, github: !isHovered.github })}
                                    >
                                        <p>GitHub</p><IconOpentab className={clsx(cx['projects-section--icon'], {'!fill-white': isHovered.github})}/>
                                    </a>
                                )}
                            </div>
                            <div className={cx['projects-section--tech-div']}>
                                <h2 className={cx['projects-section--tech-div--title']}>Tech Stack Used:</h2>
                                {techstack?.map((items, index) => (
                                    <motion.span 
                                        key={index} 
                                        whileHover={{ y: -10 }}
                                        onMouseEnter={cursorEnter}
                                        onMouseLeave={cursorLeave}
                                        className={cx['projects-section--tech-div--span']
                                    }>
                                        {items.tech}
                                    </motion.span>
                                ))}
                            </div>
                            <motion.div
                                ref={ref}
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "100%" } : { width: 0 }}
                                transition={{ duration: 1.5 }}
                            >
                                <hr className={cx["projects-section--hr"]}/>
                            </motion.div>
                            <div className={cx["projects-section--desc-div"]}>
                                <div className='col-span-2'>
                                    <p className={cx["projects-section--desc-div--desc"]}>{description}</p>
                                </div>
                                <div className={cx['projects-section--desc-div--rolerep']}>
                                    <h2 className={cx['projects-section--desc-div--rolerep--title']}>ROLE</h2>
                                    <p className={clsx(cx['projects-section--desc-div--rolerep--desc'], 'mb-4 desktop:mb-8')}>{role}</p>
                                    <h2 className={cx['projects-section--desc-div--rolerep--title']}>RESPONSIBILITIES</h2>
                                    <p className={cx['projects-section--desc-div--rolerep--desc']}>{responsibilities}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                )}
            </section>
        </div>
    );
}

export default page;