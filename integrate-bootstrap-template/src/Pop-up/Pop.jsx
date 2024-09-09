import React from "react";
import styles from '../Pop-up/Pop.module.css'
function Pop() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-7 d-flex px-2">
          <div className="col-md-4">
            <div className={styles["product-card"]}>
              <img
                src="src/Pop-up/1.jpg"
                className="card-img-top"
                alt="Lemons with leaves"
              />
              <div className="card-body text-center">
                <div className={styles["icon-container"]}>
                  <i className="fas fa-shopping-bag text-success"></i>
                </div>
                <p className="text-muted mt-3 mb-0">Snacks</p>
                <div className="d-flex justify-content-center align-items-center">
                  <div className={styles.rating}>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star-half-alt text-warning"></i>
                  </div>
                  <p className="ml-2 text-muted">(4.5)</p>
                </div>
                <p className="card-title px-5">
                  Best snacks with hazel nut mix pack 200gm
                </p>
                <div className={styles.price}>
                  <span className="text-success font-weight-bold">$120.25</span>
                  <span className="text-muted ml-2">
                    <del>$123.25</del>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
              <div className={styles["product-card"]}>
                <img
                  src="src/Pop-up/3.jpg"
                  className="card-img-top"
                  alt="Apple and green juice"
                />
                <div className="card-body text-center">
                  <div className={styles["icon-container"]}>
                    <i className="fas fa-shopping-bag text-success"></i>
                  </div>
                  <p className="text-muted  mt-3 mb-0">Snacks</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={styles.rating}>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                    </div>
                    <p className="ml-2 text-muted">(5.0)</p>
                  </div>
                  <p className="card-title px-5">Sweet snakes crunchy nut mix 250gm pack</p>
                  <div className={styles.price}>
                    <span className="text-success font-weight-bold">$100.00</span>
                    <span className="text-muted ml-2"><del>$110.00</del></span>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="col-md-4">
              <div className={styles["product-card"]}>
                <img
                  src="src/Pop-up/6.jpg"
                  className="card-img-top"
                  alt="Watermelon"
                />
                <div className="card-body text-center">
                  <div className={styles["icon-container"]}>
                    <i className="fas fa-shopping-bag text-success"></i>
                  </div>
                  <p className="text-muted  mt-3 mb-0">Snacks</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={styles.rating}>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                    </div>
                    <p className="ml-2 text-muted">(5.0)</p>
                  </div>
                  <p className="card-title px-5">Sweet snakes crunchy nut mix 250gm pack</p>
                  <div className={styles.price}>
                    <span className="text-success font-weight-bold">$100.00</span>
                    <span className="text-muted ml-2"><del>$110.00</del></span>
                  </div>
                </div>
              </div>
            </div>
           
           </div>
        <div className="col-md-5">
          <div className={styles["promo-card"]}>
            <img
              src="src/Pop-up/products-rightview.jpg" height={417}
              className="card-img-top"
              alt="Bowl of organic vegetables"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center p-3">
              <h2 className={styles.strt}>
                Organic & Healthy Vegetables
              </h2>
              <p className="text-dark h4 font-weight-bold">25% OFF</p>
             <div className="end text-end">
             <button className={styles.btn}>Shop Now</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pop;