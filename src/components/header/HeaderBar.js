import React from 'react';
// import logo from './../../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import './Header.scss';

/**
 * Header component.
 */
const HeaderBar = () => (
    <Navbar className="movie-header" expand="lg" sticky="top" role="banner">
        <Navbar.Brand href="#home" className="movie-header__brand">
            {/* <img
                alt=""
                src={logo}
                width="36"
                height="36"
                className="d-inline-block align-top"
            /> */}
            React Movies
        </Navbar.Brand>
    </Navbar>
);

export default HeaderBar;
