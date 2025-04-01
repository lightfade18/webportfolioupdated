"use client";

import { useState } from "react";
import cx from "@styles/MainStyle.module.scss";
import { setCursorVariant } from "@utils/cursorState";
import dataValue from "@utils/data.json";
import { motion } from "framer-motion";
import { useMedia } from "react-use";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; // Pagination styles

// Type Definitions
import type SwiperProps from "swiper/types/swiper-class";

// Define the structure for the "experience-details" data
interface CertificatesItem {
  title: string;
  issuer: string;
  date: string;
  badge?: string; // Make badge optional
}

interface CertificatesDataValue {
  name: "certificates-details";
  data: CertificatesItem[]; // Only certificates have this property
}

interface OtherDataValue {
  name: string;
  details?: string;
  profileImage?: string;
  cvPath?: string;
  frontend?: { value: string }[];
  backend?: { value: string }[];
  devtools?: { value: string }[];
}

type DataValue = CertificatesDataValue | OtherDataValue;

const Certificates = () => {
  const isMobile = useMedia("screen and (max-width: 640px)", false);
  const [swiper, setSwiper] = useState<SwiperProps>();
  const [activeIndex, setActiveIndex] = useState(0);
  const cursorEnter = () => setCursorVariant("focus");
  const cursorLeave = () => setCursorVariant("default");

  // Filter out the certificates data from the data array
  const certificates =
    (
      dataValue.find(
        (item: DataValue) => item.name === "certificates-details"
      ) as CertificatesDataValue
    )?.data || [];

  return (
    <section className={cx["cert-section"]}>
      <h1 className={cx["cert-section--main-font"]}>My Certificates</h1>
      <hr className={cx["about-div--hr"]} />
      <Swiper
        className={cx["swiper-div"]}
        slidesPerView={isMobile ? "auto" : 2} // Show 2 slides per view
        spaceBetween={isMobile ? 120 : 20} // Set space between slides (adjust as necessary)
        centeredSlides={isMobile ? true : false}
        modules={[Pagination]} // Include Pagination module
        pagination={{ clickable: true, el: ".cert-pagination-div" }} // Make pagination clickable
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* Map through certificate details and create slides dynamically */}
        {certificates.map((certificate, index) => (
          <SwiperSlide key={index} className={cx["cert-slides"]}>
            <motion.div
              className={cx["cert-slides-box"]}
              whileHover={{
                y: -8,
                backgroundColor: "var(--sub_body_background)",
              }}
              transition={{ type: "tween", stiffness: 300, damping: 15 }}
            >
              <div className={cx["cert-slides-containers"]}>
                <h1 className={cx["cert-slides-containers--second-font"]}>
                  {certificate.title}
                </h1>
                <h1 className={cx["cert-slides-containers--third-font"]}>
                  Issuer: {certificate.issuer}
                </h1>
                <h1 className={cx["cert-slides-containers--third-font"]}>
                  Issued Date: {certificate.date}
                </h1>
                {certificate.badge && (
                  <div
                    className={cx["badge-button"]}
                    onMouseEnter={cursorEnter}
                    onMouseLeave={cursorLeave}
                  >
                    <a
                      href={certificate.badge}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Badge
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={cx["cert-bullet-div"]}>
        <div className={cx["cert-sub-bullet-div"]}>
          <div
            className={"cert-pagination-div"}
            onMouseEnter={cursorEnter}
            onMouseLeave={cursorLeave}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
