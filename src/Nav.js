// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from './assets/images/logo.svg';

const Nav = () => {
    return (
        <div className="fixed-top">
            <header className="container">
                <nav id="main-nav" className="navbar navbar-expand-sm">
                    <div className="container-fluid">
                        <img src={logoImg} alt="Logo" className="" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0" id="main_nav_links">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" aria-label="Home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/booking" className="nav-link" aria-label="Book a Table">Book a Table</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Nav;
