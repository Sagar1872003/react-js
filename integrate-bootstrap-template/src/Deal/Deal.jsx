import React from "react";
import styles from '../Deal/Deal.module.css';

function Deal() {
  return (
    <div className={`d-flex align-items-center justify-content-left min-vh-100 p-5`} 
         style={{ backgroundImage: "url('src/Deal/bg-deal.jpg')" }}>
      <div className={`position-relative d-flex align-items-center justify-content-start w-50 p-5 ${styles.bgBlur} rounded shadow-lg`}>
        <div className={`position-relative z-10 w-75 py-5 mb-5 ${styles.bgBlur} rounded`}>
          <p className="text-success h4 font-weight-bold">35% OFF</p>
          <h1 className="display-5 font-weight-bold text-dark">Great deal on organic food.</h1>
          <p className="mt-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis.</p>
          <div className="mt-4 d-flex justify-content-between text-center">
            <div>
              <p className="h2 font-weight-bold text-dark">117</p>
              <p className="text-muted">Days</p>
            </div>
            <div>
              <p className="h2 font-weight-bold text-dark">01</p>
              <p className="text-muted">Hrs</p>
            </div>
            <div>
              <p className="h2 font-weight-bold text-dark">04</p>
              <p className="text-muted">Min</p>
            </div>
            <div>
              <p className="h2 font-weight-bold text-dark">56</p>
              <p className="text-muted">Sec</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deal;
