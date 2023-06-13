import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

import CurrentTeam from "../components/CurrentTeam"
import {teams} from "../components/teamDB"
import sprite from '../img/icons/sprite.svg';

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TeamPage.css";

const TeamPage = ({active, setActive}) =>{
  return (
    <div className={active?"modal active":"modal"} onClick={()=> setActive(false)}>
      <div className={active?"modal__content active":"modal__content"} onClick={e=>e.stopPropagation()}>
          <div className="footer-modal">
            <div className="footer-modal__container">
                  <h3 className="footer-modal__team">S&amp;M Coders</h3>
                  <button className="footer-modal__button-close modal-close" type="button" onClick={()=>setActive(false)}>
                  <svg className="footer-modal__icon" width={15} height={15}>
                    <use href={sprite+'#icon-close'}></use>
                  </svg>
                  </button>

                  <Swiper effect={"flip"}
                          pagination={{ clickable: true }}
                          loop={true}
                          navigation={true}
                          modules={[EffectFlip, Pagination, Navigation]}
                          className="mySwiper"
                  >
                    {teams.map( ({name,surName,position,git,linkedin,description,avatar}, index) =>
                        <SwiperSlide key={index} >
                            <CurrentTeam  name={name} surName={surName} position={position} git={git}
                                          linkedin={linkedin} description={description} avatar={avatar}
                            />
                        </SwiperSlide>)
                    }
                  </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TeamPage;