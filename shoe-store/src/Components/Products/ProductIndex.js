import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from './../../Context/ProductContext';

const ProductIndex = () => {

    const { data } = useContext(productContext);

    return (
        <div className="productIndex">
            {Object.entries(data).map(([productID, { name, image, price, description, id }]) => (
                <div className="productIndex__card" key={id}>
                    <div className="productIndex__titleAndImage">
                        <h3>{name}</h3>
                        <img src={image} alt={name} />
                    </div>
                    <div>
                        <div className="productIndex__description">
                            <h3>Description</h3>
                            <div className="underline"></div>
                            <p>{description}</p>
                        </div>
                        <div className="productIndex__priceAndDetail">
                            <p>
                                ${price}
                            </p>
                        </div>
                        <div className="productIndex__btn">
                            <Link to={productID}>
                                <button>Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductIndex
