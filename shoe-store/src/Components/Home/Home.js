import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            {/* <img
                className="home__CoverImage"
                src=""
                alt="Shoes Cover"
            /> */}
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
