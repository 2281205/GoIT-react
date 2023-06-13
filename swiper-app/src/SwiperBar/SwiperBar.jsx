import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, FreeMode } from "swiper";

export default function SwiprBar() {
  return (
    <>
      <Swiper           
  breakpoints={{
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
        slidesPerView: 4,
      },
  }}
        effect={"coverflow"}
        // direction={'horizontal'}
                         loop={true}
        // slidesPerView={1}
        // grabCursor={true}
        centeredSlides={false}
        spaceBetween= {20}
        coverflowEffect={{
          rotate: 0,
          depth: 0,
          slideShadows: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
        modules={[EffectCoverflow, Pagination, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
