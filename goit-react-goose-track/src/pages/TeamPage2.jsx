import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import CurrentTeam from "../components/CurrentTeam"
import sprite from '../img/icons/sprite.svg';

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TeamPage.css";
import {teams} from "../components/teamDB"

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

export default function TeamPage2({setActive}) {
  return (
<div classname="footer-modal">
  <div className="footer-modal__container">
    <div classname="footer-modal__body">
      <h3 className="footer-modal__team">S&amp;M Coders</h3>
      <button className="footer-modal__button-close modal-close" type="button" onClick={()=>setActive(false)}>
        <svg className="footer-modal__icon" width={15} height={15}>
          <use href={sprite+'#icon-close'}></use>
        </svg>
      </button>


       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

   
      {teams.map( ({name,surName,position,git,linkedin,description,avatar}, index) =>
      <SwiperSlide>
          <CurrentTeam  key={index} name={name} surName={surName} position={position} git={git}
                        linkedin={linkedin} description={description} avatar={avatar}
          />
      </SwiperSlide>)
      }
    </Swiper>
    </div>
  </div>
</div>
);}