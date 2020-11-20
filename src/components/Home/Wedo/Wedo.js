import React from 'react';
import img1 from '../../../icon/Group 65@2x.png'
import img2 from '../../../icon/Group 66@2x.png'
import img3 from '../../../icon/Group 69@2x.png'
import img4 from '../../../icon/Group 72@2x.png'
import './Wedo.css';

const Wedo = () => {
    return (
        <section className="py-5 text-center wedo">
            <h1 className="display-5 wedo_title">What we do</h1>
            <p className='para'>Our main focus is to make the User Experience very <br/> simple and easy. Simplicity is our Strength</p>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <img className="image img-fluid" src={img1} alt=""/>
                        <h4 className="mt-4 mb-2 wedo_text">Experience Design</h4>
                        <p className="para">The point of using Lorem<br/> ipsum is that it has a more-or-<br/> less normal</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 cran">
                        <img className="image img-fluid" src={img2} alt=""/>
                        <h4 className="mt-4 mb-2 wedo_text">InterFace Design</h4>
                        <p className="para">The point of using Lorem<br/> ipsum is that it has a more-or-<br/> less normal</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 red">
                        <img className="image img-fluid" src={img3} alt=""/>
                        <h4 className="mt-4 mb-2 wedo_text">Prototype</h4>
                        <p className="para">The point of using Lorem<br/> ipsum is that it has a more-or-<br/> less normal</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 begune">
                        <img className="image img-fluid" src={img4} alt=""/>
                        <h4 className="mt-4 mb-2 wedo_text">Illustration</h4>
                        <p className="para">The point of using Lorem<br/> ipsum is that it has a more-or-<br/> less normal</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Wedo;