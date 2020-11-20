import React from 'react';
import './Navbar.css';
import logo from '../../../icon/Group 86.png';

const Navbar = () => {
    return (
        <div>
            <div className="container">
          <nav class="navbar navbar-expand-md navbar-light py-4" >
                <img className="logo" src={logo} alt="logo"/>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                        <div class="collapse navbar-collapse " id="navbarNav">
                            <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#achievement">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#pricing">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#team">Out Team</a>
                            </li>
                            <li>
                                <a href="#contact"><button>Contact us</button></a>
                            </li>
                        
                            </ul>
                        </div>
                </nav>
                </div>
        </div>
    );
};

export default Navbar;