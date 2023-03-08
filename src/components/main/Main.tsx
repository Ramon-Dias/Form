import React from 'react';
import Institucional from '../../pages/institucional/Institucional';
import Home from '../../assets/img/home.png'
import Arrow from '../../assets/img/arrow-point-to-right.png'
import styles from '../../styles/Main.module.scss'

const Main = () => {
    return(
        <div className={styles['container__main']}>
            <div className={styles['main__route']}>
                <img className={styles['main__home']} src={Home} alt='home'></img>
                <img className={styles['main__arrow']} src={Arrow} alt='arrow'></img>
                <p className={styles['container__main-title']}>Institucional</p>
            </div>
            <Institucional/>
        </div>
    )
}

export default Main
