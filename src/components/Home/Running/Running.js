import React from 'react';
import './Running.css';
import img from '../../../icon/20[Converted]@2x.png';
import imgBg from '../../../icon/Group 46@2x.png';

const Running = () => {
    return (
        <section id="running" className="my-5 container">
            <div className="bg-img-running">
                   <img className="bg-img" src={imgBg} alt=""/>

            </div>
            <div className="circle-running-one"></div>
            <div className="circle-running-two"></div>
            <div className="row">
                <div className="col-md-5">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="col-md-7 ">
                    <div className="running_text">
                        <h1 className="running_title">Stay Running & Projects</h1>
                        <p className="running_para">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distributiton of letter.
                        </p>
                        <button className="running_btn">Contact us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Running;