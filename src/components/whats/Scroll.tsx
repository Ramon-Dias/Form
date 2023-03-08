import { useState } from "react"
import ArrowUp from '../../assets/img/arrow-up.png';
import styles from '../../styles/Scroll.module.scss'

export default function ScrollPage() {

    const [pageYPosition, setPageYPosition] = useState(0);

    function getPageYAfterScroll() {
        setPageYPosition(window.scrollY);
    }

    window.addEventListener('scroll', getPageYAfterScroll);

    return (
        <div className={styles["arrow__up"]} >
            <a href="/"><img src={ArrowUp} alt="Abrir" /></a>
        </div>
    )
}


