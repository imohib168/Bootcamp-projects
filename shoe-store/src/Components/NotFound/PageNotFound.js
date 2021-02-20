import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <h1>Page Not Found</h1>
            <Link to="/">
                Back to home
            </Link>
        </div>
    )
}

export default PageNotFound
