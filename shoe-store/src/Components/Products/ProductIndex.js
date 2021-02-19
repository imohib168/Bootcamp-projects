import React from 'react';

import { data } from './../../Items';

import { Link } from 'react-router-dom';


const ProductIndex = () => {
    return (
        <div className="productIndex">
            {data.products.map(product => (
                <div className="productIndex__card" key={product.id}>
                    <div className="productIndex__titleAndImage">
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div>
                        <div className="productIndex__description">
                            <h3>Description</h3>
                            <div className="underline"></div>
                            <p>{product.description}</p>
                        </div>
                        <div className="productIndex__priceAndDetail">
                            <p>
                                ${product.price}
                            </p>
                        </div>
                        <div className="productIndex__btn">
                            <Link to=":productID">
                                <button>Details</button>
                            </Link>
                            {/* <Link to="cart">
                                <button className="productIndex__btn">Add to Cart</button>
                            </Link> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductIndex
