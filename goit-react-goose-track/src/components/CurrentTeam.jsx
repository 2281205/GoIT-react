import React from "react";
import { nanoid } from 'nanoid';
import sprite from '../img/icons/sprite.svg';
import "./CurrentTeam.css";

const CurrentTeam = ({name,surName,position,git,linkedin,description,avatar}) =>{
  const keyId = nanoid();
console.log(keyId)

  
      return (
     //   mySwiper  swiper-wrapper  swiper-slide swiper__item border__outside  swiper__img
     // swiper__name  swiper__subtitle  swiper__soc-list list  swiper__soc-item  swiper__link  swiper__icon  
   // swiper__text__container swiper__text  swiper-pagination  swiper-button-prev  swiper-button-next

      <div className="mySwiper">
        <div className="swiper-wrapper">
      
          <div className="swiper-slide swiper__item">
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
              <li key={keyId} className="swiper__soc-item">
              <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
                <a href={git} target="_blank" rel="noopener noreferrer" className="swiper__link">
                  <svg className="swiper__icon" width={30} height={30}>
                      <use href={sprite+'#icon-github'} />
                  </svg>
                </a>

              </li>
              </ul>
                <a href={"https://google.com"} target="_blank" rel="noreferrer">
                  <svg className="swiper__icon" width={30} height={30}>
                  <use href={sprite+'#icon-linkedin'} />
                  </svg>
                </a>
              

           

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