import React from 'react';
import './DedicatedTeam.css';
import img from '../../../icon/Group 46@2x.png';

const DedicatedTeam = () => {
    return (
        <section  className='container my-5 py-5' id="pricing">
            <div className="dedicated-team-bg-image">
                <img src={img}     alt=""/>
            </div>
            <h1 className='text-center mb-5 dedicated_title'>Choose Your Dedicated Team</h1>
            <div className="row my-3 text-center d-flex justify-content-center">
                <div className="col-md-4 col-lg-3 price_box">
                    <div className="">
                        <h1 className="price">$199</h1>
                        <p className="basic">For Basic</p>

                        <p>HomePage</p>
                        <p>No Inner Page</p>
                        <p>Asset Files</p>
                        <p>Source Files</p>
                        <p>Free Stock Photos</p>
                        <p>10 Days Free Support</p>
                        <p>24/7 Support</p>
                        <button className="price_btn">Order Now</button>
                    </div>
                </div>
                    <div className="col-md-4 col-lg-3 price_box price_box_two">
                        <div className="">
                            <h1 className="price">$399</h1>
                            <p className="basic">For Preferred</p>

                            <p>HomePage</p>
                            <p>4 Inner Page</p>
                            <p>Asset Files</p>
                            <p>Source Files</p>
                            <p>Free Stock Photos</p>
                            <p>20 Days Free Support</p>
                            <p>24/7 Support</p>
                            <button className="price_btn">Order Now</button>
                        </div>
                    </div>
                        <div className="col-md-4 col-lg-3 price_box">
                            <div className="">
                                <h1 className="price">$599</h1>
                                <p className="basic">For Elite</p>

                                <p>HomePage</p>
                                <p>8 Inner Page</p>
                                <p>Asset Files</p>
                                <p>Source Files</p>
                                <p>Free Stock Photos</p>
                                <p>30 Days Free Support</p>
                                <p>24/7 Support</p>
                                <button className="price_btn">Order Now</button>
                            </div>
                        </div>
                    </div>
        </section>
    );
};

export default DedicatedTeam;