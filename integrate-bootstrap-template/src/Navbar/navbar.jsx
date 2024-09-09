import React from "react";
import styles from '../Navbar/navbar.module.css';

function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#" className={styles.brand}>
          <img src="src/navbar/logo.png" alt="Carrot Logo" />
        </a>

        <div className={styles.search}>
          <input type="text" placeholder="Search for items..." />
          <div className={styles.dropdown}>
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                All Categories
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">All Categories</a></li>
                <li>
                  <a className="dropdown-item" href="#">Mens</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Womens</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Electronics</a>
                </li>
              </ul>
           
            <button className={styles.searchButton}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className={styles.actions}>
            <a href="#">
              <i className="fa-regular fa-user"></i>
              Account
            </a>
            <a href="#">
              <i className="fa-regular fa-heart"></i>
              Wishlist
            </a>
            <a href="#">
              <i className="fa-solid fa-cart-shopping"></i>
              Cart
            </a>
          </div>
        </div>
        </div>
    </nav>
  );
}

export default Nav;
