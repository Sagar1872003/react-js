import React from "react";
import styles from '../Products/product.module.css';

const Products = () => {
    return (
      <div className={`container-fluid ${styles.container}`}>
        <div className="row px-5 py-1">
            <div className="cnt pb-5" align="center">
                <h2 className="fw-bold">
                Popular Products
                </h2>
                <p className="px-5 mx-5 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestiae, eveniet quaerat sequi consectetur laboriosam non quia quibusdam porro incidunt itaque provident, laborum cum ut magni officia. Deleniti, ipsam autem!</p>
            </div>
          <div className={`col-md-3 ${styles.sidebar}`}>
            <div className={`card ${styles.card}`}>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a href="#" className="text-dark fw-bold h6">All</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#" className="text-dark fw-bold h6">Snack</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#" className="text-dark fw-bold h6">Vegetable</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#" className="text-dark fw-bold h6">Fruit</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#" className="text-dark fw-bold h6">Bakery</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`card ${styles.promoCard}`} style={{backgroundImage : "url('src/Products/9.jpg')" }}>
              <div className="card-body mt-5 py-5">
                <h5 className="card-title text-light h2 mb-3">Juicy<br></br><span className="h1 text-warning fw-bold"> FRUITS</span></h5>
                <p className="card-text h5 text-light mb-3">100% Natural</p>
                <button className={styles.btn}>Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-9 pe-5">
            <div className="row">
              {products.map((product, index) => (
                <div key={index} className="col-md-3 mb-4">
                  <div className={`card ${styles.productCard}`}>
                    <img src={product.image} className="card-img-top" alt={product.alt} />
                    <div className="card-body text-center">
                      <div className={styles.lock}><i className="fas fa-lock"></i></div>
                      <div className={styles.rating}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <i key={i} className={`fas fa-star ${i < product.rating ? '' : 'text-muted'}`}></i>
                        ))}
                        ({product.rating})
                      </div>
                      <h5 className="card-title px-1 fw-bold h6">{product.title}</h5>
                      <p className="card-text">
                        <span className={styles.price}>${product.price}</span>
                        <span className={styles.oldPrice}>${product.oldPrice}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const products = [
    {
      image: 'src/Products/1.jpg',
      alt: 'Fresh organic villa farm lemon 500gm pack',
      rating: 4.5,
      title: 'Fresh organic villa farm lemon 500gm pack',
      price: 120.25,
      oldPrice: 123.25,
    },
    {
      image: 'src/Products/2.jpg',
      alt: 'Best snakes with hazel nut pack 200gm',
      rating: 5.0,
      title: 'Best snakes with hazel nut pack 200gm',
      price: 145,
      oldPrice: 150,
    },
    {
      image: 'src/Products/3.jpg',
      alt: 'Fresh organic apple 1kg simla marming',
      rating: 4.5,
      title: 'Fresh organic apple 1kg simla marming',
      price: 120.25,
      oldPrice: 123.25,
    },
    {
      image: 'src/Products/4.jpg',
      alt: 'Delicious white baked fresh bread and toast',
      rating: 5.0,
      title: 'Delicious white baked fresh bread and toast',
      price: 20,
      oldPrice: 22.10,
    },
    {
      image: 'src/Products/5.jpg',
      alt: 'Sweet crunchy nut mix 250gm pack',
      rating: 5.0,
      title: 'Sweet crunchy nut mix 250gm pack',
      price: 120.25,
      oldPrice: 123.25,
    },
    {
      image: 'src/Products/6.jpg',
      alt: 'Organic fresh venila farm watermelon 5kg',
      rating: 3.2,
      title: 'Organic fresh venila farm watermelon 5kg',
      price: 50.30,
      oldPrice: 72.60,
    },
    {
      image: 'src/Products/7.jpg',
      alt: 'Sweet crunchy nut mix 250gm pack',
      rating: 5.0,
      title: 'Sweet crunchy nut mix 250gm pack',
      price: 120.25,
      oldPrice: 123.25,
    },
    {
      image: 'src/Products/8.jpg',
      alt: 'Delicious white baked fresh bread and toast',
      rating: 5.0,
      title: 'Delicious white baked fresh bread and toast',
      price: 20,
      oldPrice: 22.10,
    },
  ];
export default Products;    