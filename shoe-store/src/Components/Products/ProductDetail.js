import React from 'react';
import { useParams } from 'react-router-dom'

import { data } from './../../Items';

const ProductDetail = () => {

    const { productID } = useParams();
    const product = data[productID];
    const { name, image } = product;

    return (
        <div>
            {name}
            <br />
            {/* <img src={image} alt={name} /> */}
        </div>
    )
}

export default ProductDetail;
