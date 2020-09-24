import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import styles from "./styles/cardItem.module.scss"

export default function CardItem() {
    return (
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src="./images/jbl.jpg" alt="jbl-tune-500bt" />
                <FontAwesomeIcon
                    icon={faHeart}
                    className={styles.card__img__icon}
                />
            </div>
            <div className={styles.card__details}>
                <h2>Product</h2>
                <span>Type</span>
                <span>Plataform</span>
                <span>Rating</span>
            </div>
            <div className={styles.card__button}>
                <a href="#">PRICE</a>
            </div>
        </div>
    )
}
