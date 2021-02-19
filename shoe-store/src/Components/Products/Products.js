import React from 'react';
import { Outlet } from 'react-router-dom';

import './Products.css';

const Products = () => {
    return (
        <div className="products">
            <h1>Products</h1>
            <div className="underline"></div>
            <Outlet />
        </div>
    )
}

export default Products;

