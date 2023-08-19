'use client';

// imports
import { useState } from 'react';
import cx from '@styles/MainStyle.module.scss';
import Image from 'next/image';

// data
import dataValue from '@utils/data.json';

// Icons
import IconArrow from '@public/assests/icons/icon-arrow.svg';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Type Definitions
import type SwiperProps from 'swiper/types/swiper-class';

const Certificates = () => {
  const [swiper, setSwiper] = useState<SwiperProps>();
  const [activeIndex, setActiveIndex] = useState(0);

  const certificates = (dataValue.find(item => item.name === 'certificatespage-details')?.images) || [];

  return (
    <section className={cx['cert-section']}>
      <h1 className={cx['cert-section--main-font']}>My Certificates</h1>
      <hr className={cx['cert-section--hr']}/>
      <div className={cx['cert-section--container']}>
        <Swiper
          className={cx['swiper-div']}
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
            el: '.pagination-div',
          }}
          draggable={false}
          modules={[Pagination]}
          onActiveIndexChange={(e) => {
            setActiveIndex(e.activeIndex);
          }}
          onInit={(swiper) => setSwiper(swiper)}
        >
          {certificates.map(items => (
            <SwiperSlide key={items.name} className={cx['cert-section--cert-slide']}>
              <Image
                src={items.imagePath}
                alt='Certificate'
                fill
                sizes="(max-width: 768px) 187px,
                    (max-width: 1200px) 217px,
                    289px"
                className='object-cover'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={cx['cert-section--nav-buttons']}>
        <button
          disabled={activeIndex === 0}
          onClick={() => swiper?.slidePrev()}
        >
          <IconArrow className={cx['cert-section--slide-arrow']} />
        </button>
        <div className={cx['cert-section--pagination-div']}>
          <div className={'pagination-div'}></div>
        </div>
        <button
          disabled={activeIndex === certificates.length - 1}
          onClick={() => swiper?.slideNext()}
        >
          <IconArrow className={cx['cert-section--rev-slide-arrow']} />
        </button>
      </div>
    </section>
  )
}

export default Certificates;