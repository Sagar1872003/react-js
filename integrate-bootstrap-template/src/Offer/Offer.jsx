import React from "react";
import styles from "../Offer/Offer.module.css";

function Offer() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className={styles.card}>
            <div
              className={styles.img}
              style={{ backgroundImage: "url('../src/Offer/pic1.jpg')" }}>
              <div>
                <h2 className={styles.title}>Fresh Snacks & Sweets</h2>
                <p className={styles.text}>
                  20% <span className="text-secondary h5">Off on first order</span>
                </p>
              </div>
              <button className={styles.btn}>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className={styles.card}>
            <div
              className={styles.img}
              style={{ backgroundImage: "url('../src/Offer/pic2.jpg')" }}>
              <div>
                <h2 className={styles.title}>Fresh & Healthy Organic Fruits</h2>
                <p className={styles.text}>
                  35% <span className="text-secondary h5">Off on first order</span>
                </p>
              </div>
              <button className={styles.btn}>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className={styles.card}>
            <div
              className={styles.img}
              style={{ backgroundImage: "url('../src/Offer/pic3.jpg')" }}>
              <div>
                <h2 className={styles.title}>Healthy Bakery Products</h2>
                <p className={styles.text}>
                  30% <span className="text-secondary h5">Off on first order</span>
                </p>
              </div>
              <button className={styles.btn}>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-3 mb-4">
          <div className="card text-center px-3">
            <div className="card-body ">
              <i className="fas fa-box-open text-success h1 mb-4"></i>
              <h3 className="card-title">Product Packing</h3>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card text-center px-3">
            <div className="card-body ">
              <i className="fas fa-headset text-success h1 mb-4"></i>
              <h3 className="card-title">24 * 7 Support</h3>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card text-center px-3">
            <div className="card-body ">
              <i className="fas fa-truck text-success h1 mb-4"></i>
              <h3 className="card-title">Delivery in 5 Days</h3>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card text-center px-3">
            <div className="card-body ">
              <i className="fas fa-lock text-success h1 mb-4"></i>
              <h3 className="card-title">Payment Secure</h3>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
