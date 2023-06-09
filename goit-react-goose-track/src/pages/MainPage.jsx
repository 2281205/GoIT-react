import React from 'react';
import Slider from "react-slick";

import { Comment } from "../components/Comment";
import { users } from "../components/usersDB"
import { MainPageStyled } from "./MainPage.styled";
import sprite from '../img/icons/sprite.svg';
import CurrentTeam from "../components/CurrentTeam"

// const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
//   <div {  ...props} 
//         className={ "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "") }
//         aria-hidden="true"
//         aria-disabled={false}
//         type="button">
//       <svg height="6" width="39" className="svg-arrow">
//           <use href={sprite+'#arRight'}></use>
//       </svg>
//   </div>
// );

// const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
//   <div {...props}
//         className={ "slick-next slick-arrow" + (currentSlide === slideCount - 1 ? " slick-disabled" : "") }
//         aria-hidden="true"
//         aria-disabled={ false}
//         type="button">
//       <svg height="6" width="39" className="svg-arrow">
//           <use href={sprite+'#arLeft'}></use>
//       </svg>
//   </div>
// );

//console.log(SlickArrowLeft,SlickArrowRight)
export function MainPage(){

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
        // nextArrow:<SlickArrowRight></SlickArrowRight>,
        // prevArrow:<SlickArrowLeft></SlickArrowLeft>
      }
    
return(
    <MainPageStyled>
        <CurrentTeam />
        <section className="content-review">
            <h2 className="content-h2">Reviews</h2>
            <Slider  className="slider"  {...settings} >
                {users.map( ({ name, star, text, avatar }, index) =>
                    <Comment key={index} className='tr' src={avatar} star={star} name={name}>{text}</Comment>)
                }
            </Slider>
        </section>

    </MainPageStyled>);}
