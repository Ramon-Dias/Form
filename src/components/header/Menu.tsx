import React from "react";

import Modal from 'react-modal'
import styles from '../../styles/Menu.module.scss'
import Fechar from '../../assets/img/fechar.png'

interface MenuProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

function Menu ({isOpen, onRequestClose}: MenuProps) {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={styles['menu-hamb']}
        className={styles['menu']}
        >
            <div className={styles['menu__title']}>
            <p>Entrar</p>
            <img src={Fechar} alt="x"/>
            </div>
            <p>Cursos</p>
            <p>Saiba Mais</p>
            <p>Institucionais</p>
        </Modal>
    )
}


export default Menu
