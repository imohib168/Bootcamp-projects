import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <p>Just Do It.</p>
            <Link className="btn" to="products">
                <button className="home__btn">
                    Explore Products
                </button>
            </Link>
        </div>
    )
}

export default Home
