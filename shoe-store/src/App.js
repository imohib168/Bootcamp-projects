import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import ProductIndex from './Components/Products/ProductIndex';
import ProductDetail from './Components/Products/ProductDetail';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="app">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="products" element={<Products />}>
                        <Route path="/" element={<ProductIndex />}></Route>
                        <Route path=":productID" element={<ProductDetail />}></Route>
                    </Route>
                    <Route path="cart" element={<Cart />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
