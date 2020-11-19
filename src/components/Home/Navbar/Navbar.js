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
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Out Team</a>
                            </li>
                            <li>
                                <button>Contact us</button>
                            </li>
                        
                            </ul>
                        </div>
                </nav>
                </div>
        </div>
    );
};

export default Navbar;