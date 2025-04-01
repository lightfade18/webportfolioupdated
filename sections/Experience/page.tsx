"use client";

import { useState } from "react";
import cx from "@styles/MainStyle.module.scss";
import { setCursorVariant } from "@utils/cursorState";
import dataValue from "@utils/data.json";
import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; // Pagination styles

// Type Definitions
import type SwiperProps from "swiper/types/swiper-class";

// Define the structure for the "experience-details" data
interface ExperienceContent {
  data: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  contents: ExperienceContent[];
}

interface DataValue {
  name: string;
  data?: ExperienceItem[]; // Only the "experience-details" has the "data" field
}

// Type for the full data
type Data = DataValue[];

const Experience = () => {
  const [swiper, setSwiper] = useState<SwiperProps>();
  const [activeIndex, setActiveIndex] = useState(0);
  const cursorEnter = () => setCursorVariant("focus");
  const cursorLeave = () => setCursorVariant("default");

  // Fetching experience data from the JSON file
  const experienceDetails =
    (dataValue as Data).find((data) => data.name === "experience-details")
      ?.data || [];

  return (
    <section className={cx["exp-section"]}>
      <h1 className={cx["exp-section--exp-main-font"]}>Work Experience</h1>
      <hr className={cx["about-div--hr"]} />
      <Swiper
        className={cx["swiper-div"]}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={80}
        modules={[Pagination]} // Include Pagination module
        pagination={{ clickable: true, el: ".exp-pagination-div" }} // Make pagination clickable
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* Map through experience details and create slides dynamically */}
        {experienceDetails.map((experience, index) => (
          <SwiperSlide className={cx["exp-slides"]} key={index}>
            <motion.div
              className={cx["exp-slides-box"]}
              whileHover={{
                y: -8,
                backgroundColor: "var(--sub_body_background)",
              }}
              transition={{ type: "tween", stiffness: 300, damping: 15 }}
            >
              <h1 className={cx["exp-section--exp-first-font"]}>
                {experience.title}
              </h1>
              <h1 className={cx["exp-section--exp-second-font"]}>
                {experience.company}
              </h1>
              <h1 className={cx["exp-section--exp-third-font"]}>
                {experience.date}
              </h1>
              <div className={cx["exp-section--exp-body-font"]}>
                {/* Mapping through the contents of each experience */}
                {experience.contents.map((content, contentIndex) => (
                  <p
                    className={cx["exp-section--exp-details"]}
                    key={contentIndex}
                  >
                    <span>&#8226;</span> {content.data}
                  </p>
                ))}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={cx["exp-bullet-div"]}>
        <div className={cx["exp-sub-bullet-div"]}>
          <div
            className={"exp-pagination-div"}
            onMouseEnter={cursorEnter}
            onMouseLeave={cursorLeave}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
