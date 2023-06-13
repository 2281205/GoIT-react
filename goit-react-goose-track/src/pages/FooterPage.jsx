import React, { useState } from 'react';

import styles from './FooterPage.module.css';
import sprite from '../img/icons/sprite.svg';
import TeamPage from './TeamPage';

export default function FooterPage()
{
  const [modalActive, setModalActive] = useState(false);
return(
    <footer className={styles.footer}>
        <div className={styles.container}>
            <p className={styles.footer__text}>
            {'с 2023 | All Rights Reserved | Developed with '} 
            <svg width="14" height="13">
                <use href={sprite+'#icon-heart'}></use>
            </svg>
           {' by '} 
            <span className={styles.footer__text__students} onClick={()=> setModalActive(true)} >
               {'GoIT Students'} </span>
            </p>
        </div>
        <TeamPage active={modalActive} setActive={setModalActive} />
    </footer>
);}