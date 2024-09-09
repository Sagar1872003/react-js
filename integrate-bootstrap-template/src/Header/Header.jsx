import React from "react";
import styles from '../Header/Header.module.css'; 

function Header() {
  return (
    <section className={`${styles.container} d-flex justify-content-between`}>
      <div>
        <nav className="navbar text-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </nav>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className={`${styles.list} text-dark p-3`}>
            <ul>
              <li><a className="dropdown-item" href="#">Dairy & Bakery</a></li>
              <li><a className="dropdown-item" href="#">Fruits & Vegetables</a></li>
              <li><a className="dropdown-item" href="#">Snack & Spice</a></li>
              <li><a className="dropdown-item" href="#">Juice & Drinks</a></li>
              <li><a className="dropdown-item" href="#">View All</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.inquire}>
        <ul className="navbar-nav mb-lg-0 d-flex flex-row align-items-center">
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item dropdown mx-3">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Category
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Shop Left Sidebar</a></li>
              <li><a className="dropdown-item" href="#">Shop Right Sidebar</a></li>
              <li><a className="dropdown-item" href="#">Full Width</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown mx-3">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Products
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Product Left Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">Product Right Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">Product Full Width</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown mx-3">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Pages
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">About Us</a></li>
                            <li><a className="dropdown-item" href="#">Contact Us </a></li>
                            <li><a className="dropdown-item" href="#">Cart</a></li>
                            <li><a className="dropdown-item" href="#">Chech Out </a></li>
                            <li><a className="dropdown-item" href="#">Track Order</a></li>
                            <li><a className="dropdown-item" href="#">Wishlist</a></li>
                            <li><a className="dropdown-item" href="#">Faq</a></li>
                            <li><a className="dropdown-item" href="#">Login </a></li>
                            <li><a className="dropdown-item" href="#">Register</a></li>
                            <li><a className="dropdown-item" href="#">Policy</a></li>
                            
                        </ul>
                    </li>
                    <li className="nav-item dropdown mx-3">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">        
                        Blog
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Left Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">Right Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">Full Width</a></li>
                        <li><a className="dropdown-item" href="#">Detail Left Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">Detail Right Sidebar</a></li>
                            <li><a className="dropdown-item" href="#">Detail Full Width</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown mx-3">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Elements
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Products</a></li>
                            <li><a className="dropdown-item" href="#">Typography</a></li>
                            <li><a className="dropdown-item" href="#">Buttons</a></li>
                        </ul>
                    </li>

        </ul>
      </div>
      <div className={styles.contact}>
        <p>
          <a href="#" className="text-dark">
            +123 ( 456 ) ( 7890 )
          </a>
        </p>
      </div>
    </section>
  );
}

export default Header;
