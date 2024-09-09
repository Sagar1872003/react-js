import React from "react";

 
const Review = () => {
    return (
      <div className="container py-5">
       
        <section className="text-center mb-5">
          <h2 className="display-5 mb-4">Great Words From People</h2>
          <p className="text-muted mb-5 px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
          </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-center mb-4">
                  <img src="src/Review/1.jpg" alt="" className="rounded-circle" width="100" height="100" />
                  </div>
                  <h5 className="card-title">Stephen Smith</h5>
                  <p className="card-subtitle text-muted mb-2">Co Founder</p>
                  <p className="card-text">“eliumspus dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                  <div className="text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-center mb-4">
                    <img src="src/Review/2.jpg" alt="" className="rounded-circle" width="100" height="100" />
                  </div>
                  <h5 className="card-title">Lorem Robinson</h5>
                  <p className="card-subtitle text-muted mb-2">Manager</p>
                  <p className="card-text">“eliumspus dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                  <div className="text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>  
           
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-center mb-4">
                    <img src="src/Review/3.jpg" alt="" className="rounded-circle" width="100" height="100" />
                  </div>
                  <h5 className="card-title">Saddika Alard</h5>
                  <p className="card-subtitle text-muted mb-2">Team Leader</p>
                  <p className="card-text">“eliumspus dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                  <div className="text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <section className="text-center">
          <h2 className="display-5 mb-4">Latest News</h2>
          <p className="text-muted mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
          </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <p className="text-muted mb-2">By Admin | Food</p>
                  <h5 className="card-title mb-2 px-4">Best guide to Shopping for organic ingredients.</h5>
                  <a href="#" className="text-success">Read More <i className="fas fa-arrow-right"></i></a>
                </div>
                <img src="src/Review/4.jpg" alt="Image of organic ingredients" className="card-img-top" />
                <div className="position-absolute bottom-0 end-0 bg-dark text-white text-center rounded p-2 m-3">
                  <span className="small">09<br />sep</span>
                </div>
              </div>
            </div>
          
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <p className="text-muted mb-2">By Admin | Snacks</p>
                  <h5 className="card-title mb-2 px-4">Cursus at elit vestibulum urna pretium elit mauris.</h5>
                  <a href="#" className="text-success">Read More <i className="fas fa-arrow-right"></i></a>
                </div>
                <img src="src/Review/5.jpg" alt="Image of a bowl of snacks" className="card-img-top" />
                <div className="position-absolute bottom-0 end-0 bg-dark text-white text-center rounded p-2 m-3">
                  <span className="small">12<br />oct</span>
                </div>
              </div>
           </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <p className="text-muted mb-2">By Admin | Vegetable</p>
                  <h5 className="card-title mb-2 px-4">Condimentum Nam enim bestMorbi odio sodales.</h5>
                  <a href="#" className="text-success">Read More <i className="fas fa-arrow-right"></i></a>
                </div>
                <img src="src/Review/6.jpg" alt="Image of a bowl of vegetables" className="card-img-top" />
                <div className="position-absolute bottom-0 end-0 bg-dark text-white text-center rounded p-2 m-3">
                  <span className="small ">22<br />jan</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  

export default Review;