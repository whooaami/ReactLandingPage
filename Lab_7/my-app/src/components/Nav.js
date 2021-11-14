import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: '#fff',
    };

    return (
        <nav>
            <Link style={ navStyle } to="/">
                <h1 className="navTitle">Cars.</h1>
            </Link>
            
            <ul className="nav-links">
                <Link style={ navStyle } to="/home">
                    <li>Home</li>
                </Link>
                <Link style={ navStyle } to="/catalog">
                    <li>Catalog</li>
                </Link>
                <Link style={ navStyle } to="/cart">
                    <li>Cart</li>
                </Link>         
            </ul>
        </nav>
    );
}

export default Nav;