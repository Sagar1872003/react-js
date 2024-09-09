import React from "react";
import styles from '../Card/card.module.css';

function Card() {
    return (
        <div className={styles.cardGroup}>
            <div className={styles.cardLeft}>
                <div className={styles.cardItem}>
                    <h5 className={styles.cardTitle}>Cake & Milk</h5>
                    <p className={styles.cardText}>(65 items)</p>
                </div>
                <div className={styles.cardItem}>
                    <h5 className={styles.cardTitle}>Fresh Meat</h5>
                    <p className={styles.cardText}>(30 items)</p>
                </div>
                <div className={styles.cardItem}>
                    <h5 className={styles.cardTitle}>Vegetables</h5>
                    <p className={styles.cardText}>(25 items)</p>
                </div>
                <div className={styles.cardItem}>
                    <h5 className={styles.cardTitle}>Apple & Mango</h5>
                    <p className={styles.cardText}>(45 items)</p>
                </div>
                <div className={styles.cardItem}>
                    <h5 className={styles.cardTitle}>Strawberry</h5>
                    <p className={styles.cardText}>(68 items)</p>
                </div>
                <div className={styles.cardItem}>
                    <h5 className={styles.cardTitle} style={{ color: 'green' }}>View More</h5>
                </div>
            </div>

            <div className={styles.cardRight}>
                <div className={styles.cardImage}>
                    <img src="src/Card/img-1.jpg" alt="Cake" />
                    <div className={styles.cardOverlay}>
                       <div className={styles.bg}>
                       <h4 className={styles.cardOffer}>50<span><small>%</small><small>OFF</small></span></h4>
                        <h5 className={styles.cardTitle}>Cake</h5>
                        <button className={styles.cardButton}>Shop Now</button>
                       </div>
                    </div>
                </div>
                <div className={styles.cardImage}>
                    <img src="src/Card/img-2.jpg" alt="Milk" />
                    <div className={styles.cardOverlay}>
                       <div className={styles.bg}>
                       <h4 className={styles.cardOffer}>40<span><small>%</small><small>OFF</small></span></h4>
                        <h5 className={styles.cardTitle}>Milk</h5>
                        <button className={styles.cardButton}>Shop Now</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
