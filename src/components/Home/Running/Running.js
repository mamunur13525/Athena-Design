import React from 'react';
import './Running.css';
import img from '../../../icon/20[Converted]@2x.png';

const Running = () => {
    return (
        <section id="running" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className="img-fluid" src={img} alt=""/>
                    </div>
                    <div className="col-md-6 ml-5">
                        <div className="running_text">
                            
                                <h1 className="running_title">Stay Running & Projects</h1>
                                <p className="running_para">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distributiton of letter.

                                </p>
                                <button className="running_btn">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Running;