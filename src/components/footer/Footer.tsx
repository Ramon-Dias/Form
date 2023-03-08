import React from 'react';
import styles from '../../styles/Footer.module.scss'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import twitter from '../../assets/img/twitter.png'
import youtube from '../../assets/img/youtube.png'
import linkedin from '../../assets/img/linkedin.png'
import mastercard from '../../assets/img/master.png'
import visa from '../../assets/img/Visa.png'
import diners from '../../assets/img/diners.png'
import elo from '../../assets/img/elo.png'
import hiper from '../../assets/img/hiper.png'
import paypal from '../../assets/img/paypal.png'
import boleto from '../../assets/img/Boleto.png'
import vtexpci from '../../assets/img/vtex-pci.png'
import vtex from '../../assets/img/vtex.png'
import m3 from '../../assets/img/m3.png'




const Footer = () => {
    return (
        <footer>
            <div className={styles['footer__newsletter']}>
                        <form className={styles['footer__newsletter-form']}>
                            <label htmlFor='email'>
                                Assine nossa Newsletter
                            </label>
                            <div className={styles['footer__newsletter-input']}>
                                <input id='email' type='email' placeholder='E-mail' />
                                <button type="submit" >Enviar</button>
                            </div>

                        </form>

            </div>
            <section className={styles['footer__top']}>
                <div className={styles['footer__infos']}>
                    <div className={styles['footer__info-institucional']}>
                        <p className={styles['footer__info-title']}>Institucional</p>
                        <p className={styles['footer__info']}>Quem Somos</p>
                        <p className={styles['footer__info']}>Política de Privacidade</p>
                        <p className={styles['footer__info']}>Segurança</p>
                        <a href='/' className={styles['footer__info']}>Seja um Revendedor</a>
                    </div>
                    <div className={styles['footer__info-duvidas']}>
                        <p className={styles['footer__info-title']}>Dúvidas</p>
                        <p className={styles['footer__info']}>Entrega</p>
                        <p className={styles['footer__info']}>Pagamento</p>
                        <p className={styles['footer__info']}>Troca e Devoluções</p>
                        <a href='/' className={styles['footer__info']}>Dúvidas Frequentes</a>
                    </div>
                    <div className={styles['footer__info-fale-conosco']}>
                        <p className={styles['footer__info-title']}>Fale Conosco</p>
                        <p className={styles['footer__info']}>Atendimento ao Consumidor</p>
                        <p className={styles['footer__info']}>(11) 4159 9504</p>
                        <p className={styles['footer__info']}>Atendimento Online</p>
                        <a href='/' className={styles['footer__info']}>(11) 99433-8825</a>

                    </div>
                </div>
                <div className={styles['footer__redes']}>
                    <div className={styles['footer__container-rede']}>
                        <img src={facebook} alt='facebook' />
                        <img src={instagram} alt='instagram' />
                        <img src={twitter} alt='twitter' />
                        <img src={youtube} alt='youtube' />
                        <img src={linkedin} alt='linkedin' />
                    </div>
                    <p>www.loremipsum.com</p>
                </div>
            </section>
            <section className={styles['footer__bottom']}>
                <p className={styles['footer__text-bottom']}>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor
                </p>
                <div className={styles['footer__container-bandeiras']}>
                    <img src={mastercard} alt='bandeira mastercard' />
                    <img src={visa} alt='bandeira visa' />
                    <img src={diners} alt='bandeira american express' />
                    <img src={elo} alt='bandeira elo' />
                    <img src={hiper} alt='bandeira hipercard' />
                    <img src={paypal} alt='paypal' />
                    <img src={boleto} alt='boleto' />
                    <div className={styles['footer__line']}></div>
                    <img src={vtexpci} alt='vtex-cerficado' />
                </div>
                <div className={styles['footer__certificate']}>
                    <p className={styles['footer__text-certificate']}>Powered by</p>
                    <img src={vtex} alt='vtex-logo' />
                    <p>Developed by</p>
                    <img src={m3} alt='m3-logo' />
                </div>
            </section>
        </footer>
    )
}

export default Footer
