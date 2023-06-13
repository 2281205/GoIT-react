import React from "react";
import { nanoid } from 'nanoid';
import sprite from '../img/icons/sprite.svg';
import "./CurrentTeam.css";

const CurrentTeam = ({name,surName,position,git,linkedin,description,avatar}) =>{
  const keyId = nanoid();


  
      return (
      <div className="mySwiper">
         
        <div className="swiper-wrapper">
        {/* swiper-slide */}
          <div key={keyId} className=" swiper__item">
            <div className="border__outside">
              <div className="swiper__img">
               
                <img src={avatar} alt='User avatar'  
                  width={120}
                  height={120}
                />
              </div>
            </div>

            <p className="swiper__name">{name} {surName}</p>
            <h3 className="swiper__subtitle">{position}</h3>
            
            <ul className="swiper__soc-list list">
              <li key={keyId+1} className="swiper__soc-item">
             
                <a href={git} target="_blank" rel="noopener noreferrer" className="swiper__link">
                  <svg className="swiper__icon" width={30} height={30}>
                      <use href={sprite+'#icon-github'} />
                  </svg>
                </a>

              </li>
              <li key={keyId+2} className="swiper__soc-item">
                <a href={linkedin} target="_blank" rel="noreferrer" className="swiper__link">
                  <svg className="swiper__icon" width={30} height={30}>
                  <use href={sprite+'#icon-linkedin'} />
                  </svg>
                </a>
                </li>
                </ul>
           

            <div className="swiper__text__container">
              <p className="swiper__text">{description}</p>
            </div>
          </div>
        </div>

        <div className="swiper-pagination" />
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>

    )

}

export default CurrentTeam;