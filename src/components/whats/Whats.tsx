import styles from '../../styles/Whats.module.scss'
import Whatsapp from '../../assets/img/whatsapp.png'
import ScrollPage from './Scroll'





const Whats = () => {
    return (
        <div className={styles["container__icon"]}>
            <div >
                <a className={styles["icon__whats"]} href="https://wa.me/0000000"><img src={Whatsapp} alt="WhatsApp" /></a>
            </div>
                <ScrollPage/>
        </div>
    )
}

export default Whats

