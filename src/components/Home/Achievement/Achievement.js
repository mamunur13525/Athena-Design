import React from 'react';
import logo1 from "../../../Illustration/happy@2x.png";
import logo2 from "../../../Illustration/marketing@2x.png";
import logo3 from "../../../Illustration/surface1@2x.png";
import logo4 from "../../../Illustration/transportation@2x.png";
import './Achievement.css';

const Achievement = () => {
   


    return (
        <section id="achievement" className="container mt-5 py-5">
            <div className="row d-flex justify-content-between">
                <div className="col-md-5 mt-5">
                    <h2 className="achievement_title">Our Achievements</h2>
                    <p className="achievement-para">
                        It is a long established fact that a reader will be distracted by 
                        the readable content of a page when looking at its layout. The
                        point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letter.
                    </p>
                </div>
                <div className="col-md-6 ml-5 row">
                    <div className="col-md-6">
                        <div className="d-flex box first">
                              <img className="img-fluid box-img" src={logo1} alt="face"/>
                            <div>
                                <h3 className="count">700+</h3>
                                <p className="name">Happy Clients</p>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-md-6 ">
                        <div className="d-flex box second">
                        <img className="img-fluid box-img" src={logo2} alt="face"/>
                        <div>
                            <h3 className="count">140+</h3>
                            <p className="name">Projects Completed</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex box third">
                                <img className="img-fluid box-img" src={logo3} alt="face"/>
                                <div>
                                    <h3 className="count ">25+</h3>
                                    <p className="name">Crazy Minds</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="d-flex box last">
                        <img className="img-fluid box-img" src={logo4} alt="face"/>
                        <div>
                            <h3 className="count">75+</h3>
                            <p className="name">Running Projects</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievement;