import React from "react";
import styles from '../Footer/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}> 
      <div className="container-fluid bg-light px-5"> 
        <div className="row"> 
          <div className="col-md-3 text-secondary"> 
            <img src="src/Navbar/logo.png" alt="Carrot" className="img-fluid mb-3" /> 
            <p>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p> 
            <ul className={`list-unstyled ${styles.footerList}`}> 
              <li><i className="fas fa-map-marker-alt text-success"></i> 51 Green St. Huntington chalo beach ontario, NY 11746 KY 4783, USA.</li> 
              <li><i className="fas fa-envelope text-success"></i> example@email.com</li> 
              <li><i className="fas fa-phone-alt text-success"></i> +91 123 4567890</li> 
            </ul> 
          </div> 
          <div className="col-md-3"> 
            <h5>Company</h5> 
            <ul className={`list-unstyled ${styles.footerList}`}> 
              <li><a href="#" className={styles.footerListItem}>About Us</a></li> 
              <li><a href="#" className={styles.footerListItem}>Delivery Information</a></li> 
              <li><a href="#" className={styles.footerListItem}>Privacy Policy</a></li> 
              <li><a href="#" className={styles.footerListItem}>Terms & Conditions</a></li> 
              <li><a href="#" className={styles.footerListItem}>Contact Us</a></li> 
              <li><a href="#" className={styles.footerListItem}>Support Center</a></li> 
            </ul> 
          </div> 
          <div className="col-md-3"> 
            <h5>Category</h5> 
            <ul className={`list-unstyled ${styles.footerList}`}> 
              <li><a href="#" className={styles.footerListItem}>Dairy & Bakery</a></li> 
              <li><a href="#" className={styles.footerListItem}>Fruits & Vegetable</a></li> 
              <li><a href="#" className={styles.footerListItem}>Snack & Spice</a></li> 
              <li><a href="#" className={styles.footerListItem}>Juice & Drinks</a></li> 
              <li><a href="#" className={styles.footerListItem}>Chicken & Meat</a></li> 
              <li><a href="#" className={styles.footerListItem}>Fast Food</a></li> 
            </ul> 
          </div> 
          <div className="col-md-3"> 
            <h5>Subscribe Our Newsletter</h5> 
            <form> 
              <div className="form-group"> 
                <input type="email" className={`form-control ${styles.formControl}`} placeholder="Search here..." /> 
              </div> 
            </form> 
            <ul className={`list-inline mt-3 ${styles.footerInlineList}`}> 
              <li className="list-inline-item"><a href="#" className={`${styles.footerSocialLink} text-dark`}><i className="fab fa-facebook-f"></i></a></li> 
              <li className="list-inline-item"><a href="#" className={`${styles.footerSocialLink} text-dark`}><i className="fab fa-twitter"></i></a></li> 
              <li className="list-inline-item"><a href="#" className={`${styles.footerSocialLink} text-dark`}><i className="fab fa-instagram"></i></a></li> 
            </ul> 
          </div> 
        </div> 
        <div className="row mt-4"> 
          <div className={`col-12 ${styles.textCenter}`}> 
            <p className="mb-0">© 2024 Carrot, All rights reserved.</p> 
          </div> 
        </div> 
      </div> 
    </footer>
  );
}

export default Footer;
