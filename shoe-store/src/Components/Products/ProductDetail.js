import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom'
import { productContext } from './../../Context/ProductContext';
import './Products.css';

const ProductDetail = () => {

    const { data, addToCart } = useContext(productContext);

    const { productID } == useParams();
    const product = data[productID];
    const { name, image, price, description } = product;

    const AddItem = () => {
        const product = {
            name,
            image,
            price,
            description,
            id: Math.floor(Math.random() * 10000),
        }
        addToCart(product);
    }



    return (
        <div className="productDetail">
            <div className="productDetail__image">
                <img src={image} alt={name} />
            </div>
            <div className="productDetail__info">
                <h2>{name}</h2>
                <div className="nd"></div>

                <div className="productDetail__description">
                    <h3>Description</h3>
                    <div className="nd1"></div>
                    <p>{description}</p>
                </div>

                <h3 className="productDetail__price">${price}</h3>
                <button className="productDetail__btn" onClick={() => AddItem()}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductDetail;
