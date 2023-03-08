import React from 'react';
import styles from '../../styles/Header.module.scss'
import logo from '../../assets/img/logo.png'
import search from '../../assets/img/search.png'
import cart from '../../assets/img/cart.png'
import menuhamb from '../../assets/img/menu-hamburguer.png'

interface MenuProps {
    handleOpenModal:() => void;
}

const Header = ({handleOpenModal} : MenuProps) => {
    return(
        <header>
            <div className={styles['header__top']}>
                <div  className={styles['header__menu']}>
                    <button
                    onClick={handleOpenModal}
                    >
                        <img src={menuhamb} alt=''/>
                    </button>
                </div>
                <img className={styles['header__logo']} src={logo} alt=''></img>
                <div className={styles['header__container-input']}>
                    <img className={styles['header__search-icon']} src={search} alt=''/>
                    <input className={styles['header__search']} type="text" placeholder='Buscar... '  />
                </div>
                <div className={styles['header__my-account-cart']}>
                    <p className={styles['header__account']} >Entrar</p>
                    <img className={styles['header__cart']} src={cart} alt=''></img>
                </div>
            </div>
            <div className={styles['header__line']}></div>
            <nav className={styles['header__botton']}>
                <p className={styles['header__botton-nav-text']}>
                    Cursos
                </p>
                <p className={styles['header__botton-nav-text']}>
                    Saiba Mais
                </p>
                <p className={styles['header__botton-nav-text']}>
                    Institucionais
                </p>
            </nav>
        </header>
    )
}

export default Header
