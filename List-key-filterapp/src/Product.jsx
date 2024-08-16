import React from 'react'

import { category } from './Data'

function Product({ product, filterProduct, AddtoCart, cart , RemoveFromCart}) {

    

    return (
        <div className='mt-5'>
            {
                category.map((cat) => {
                    return (
                        <button onClick={() => filterProduct(cat.name)} key={cat.id} className='btn btn-primary mx-2'>{cat.name}</button>
                    )
                })
            }

            <button onClick={() => filterProduct("all")} className='btn btn-primary'>All</button>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-9">
                        <div className="row">
                            {
                                product.map((p) => {
                                    return (

                                        <div key={p.id} className="col-lg-4 mb-4">
                                            <div className="card">
                                                <img src={p.img} style={{ height: "200px", objectFit: "contain" }} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{p.name}</h5>
                                                    <p className="card-text fs-5 fw-bold">RS :- {p.price}</p>
                                                    <a href="#" onClick={() => AddtoCart(p.id)} className="btn btn-success">Add Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <div className='col-lg-3'>
                        <h2 align="center">Cart</h2>
                        <table className="table border">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                 cart.map((c) => {
                                    return (
                                        <tr key={c.id}>
                                            <th scope="row">{c.id}</th>
                                            <td>{c.name}</td>
                                            <td><img src={c.img} style={{ height: "100px", objectFit:"cover"}}/>
                                            </td>
                                            <td>1</td>
                                            <td>{c.price}</td>
                                            <td>
                                                    <button onClick={() => RemoveFromCart(c.id)} className="btn btn-danger">Remove</button> {/* Added Remove button */}
                                            </td>


                                            
                                        </tr>
                                    )
                                    
                                 })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product