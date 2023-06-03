import React from 'react';
import Slider from "react-slick";

import { Comment } from "../components/Comment";
import { MainPage } from "./MainPage.styled";
import sprite from '../img/icons/sprite.svg';

import Olena from '../img/avatars/Olena.jpg';
import Alexander from '../img/avatars/Alexander.jpg'
import Lisa from '../img/avatars/Lisa.jpg'
import Tim from '../img/avatars/Tim.jpg'
import graph from '../img/avatars/graph.png'

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <div {  ...props} 
        className={ "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "") }
        aria-hidden="true"
        aria-disabled={false}
        type="button">
      <svg height="6" width="39" className="svg-arrow">
          <use href={sprite+'#arRight'}></use>
      </svg>
  </div>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}
        className={ "slick-next slick-arrow" + (currentSlide === slideCount - 1 ? " slick-disabled" : "") }
        aria-hidden="true"
        aria-disabled={ false}
        type="button">
      <svg height="6" width="39" className="svg-arrow">
          <use href={sprite+'#arLeft'}></use>
      </svg>
  </div>
);


export function StartPageMain(){

      const settings={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:2,
        slidesToScroll: 1,
        adaptiveHeight:true,
        responsive:[
            {
                breakpoint:1439,
                settings:{
                    slidesToShow:1,
                }
            }
        ],
        nextArrow:<SlickArrowRight></SlickArrowRight>,
        prevArrow:<SlickArrowLeft></SlickArrowLeft>
      }
    
  return(
        <MainPage>
            <section className="content-review">
                <h2 className="content-h2">Reviews</h2>
                <Slider  className="slider"  {...settings} >
                <Comment className='tr' src={Olena} star={4} name='Olena Doe'>GooseTrack is impressive, the calendar view and
                    filter options make it easy to stay organized and focused. Highly recommended.</Comment>
                <Comment className='tr' src={Alexander} star={4} name='Alexander Hubbard'>GooseTrack is incredibly helpful, the sidebar with account management, 
                calendar, and filter options make navigation seamless. Great for staying organized.</Comment>   
                <Comment className='tr' src={Lisa} star={3} name='Lisa Olloc'>Good!</Comment>  
                <Comment className='tr' src={Tim} star={5} name='Tim'>Excellent!</Comment>      
                <Comment className='tr' src={graph} star={2} name='graph'>bad!</Comment>      
                </Slider>
            </section>
        </MainPage>);}
