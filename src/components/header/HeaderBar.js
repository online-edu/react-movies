import React from 'react';
// import logo from './../../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import './Header.scss';

const HeaderBar = () => (
    <Navbar className="movie-header" expand="lg" sticky="top">
        <Navbar.Brand href="#home">
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
