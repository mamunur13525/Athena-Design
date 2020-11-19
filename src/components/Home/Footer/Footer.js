import React from 'react';
import './Footer.css';
import logo from '../../../icon/Group 86.png'
import facebook from '../../../icon/facebook-logo-in-circular-shape@2x.png';
import twitter from '../../../icon/twitter (4)@2x.png';
import linkedin from '../../../icon/linkedin (2)@2x.png';
import dribble from '../../../icon/dribbble (1)@2x.png';
import { faDirections } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="footer_title text-center">
                <h1 className="footer_h1">Get your design right, right now</h1>
                <p className="footer_para">Be the first know out latest offers and updates!</p>
                <div className="input_box">
                    <input type="text" placeholder="Enter your email address"/>
                    <button className="footer_btn">Get Started</button>
                </div>
            </div>
            
            <div className=" py-5 container footer_last">
                <div className="row">
                <div className="col-md-4">
                    <img  className="w-25 img-fluid" src={logo} alt=""/>
                    <div className="d-flex">
                        <img className="footer_logo" src={facebook} alt=""/>
                        <img className="footer_logo" src={twitter} alt=""/>
                        <img className="footer_logo" src={linkedin} alt=""/>
                        <img className="footer_logo" src={dribble} alt=""/>
                        
                    </div>
                </div>
                <div className="col-md-2 ml-5">
                    <ul>
                        <li>Features</li>
                        <li>Enterprise</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="col-md-2">
                <ul>
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Contact Us</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div className="col-md-3">
                <ul>
                        <li>About Us</li>
                        <li>Term of Service</li>
                        <li>Security</li>
                        <li>Login</li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;