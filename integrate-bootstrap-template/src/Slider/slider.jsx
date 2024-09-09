import React from "react";
import styles from '../Slider/Slider.module.css'; 

function Slider() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                />
            </div>
            <div className="carousel-inner">
                <div className={`carousel-item active ${styles.carouselItem}`}>
                    <img src="src/Slider/banner.jpg" className="d-block w-100" alt="..." />
                    <div className={`carousel-caption d-none d-md-block ${styles.carouselCaption}`}>
                        <div className={styles.textContent}>
                            <div className={styles.header}>
                                <span>100%</span>
                                Organic Fruits
                            </div>
                            <h1>
                                Explore fresh &amp; juicy fruits.
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
                            </p>
                            <a className={styles.shopNow} href="#">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`carousel-item ${styles.carouselItem}`}>
                    <img src="src/Slider/banner-2.jpg" className="d-block w-100" alt="..." />
                    <div className={`carousel-caption d-none d-md-block ${styles.carouselCaption}`}>
                        <div className={styles.textContent}>
                            <div className={styles.header}>
                                <span>100%</span>
                                Organic Vegetables
                            </div>
                            <h1>
                                Discover fresh &amp; healthy vegetables.
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
                            </p>
                            <a className={styles.shopNow} href="#">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;
