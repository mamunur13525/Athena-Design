import React from 'react';
import './Main.css';
import img from '../../../icon/16[Converted]@2x.png';


const Main = () => {
    return (
        <main  id="home">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6 col-sm-12 mt-5">
                        <h1 className="title"><span>Florence</span> agency</h1>
                        <p className="lead my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis iste ratione quos quod, deserunt dignissimos accusantium neque. Repellendus, possimus?</p>
                        <button>See Pricing</button>
                    </div>
                    <div className="col-md-6 col-sm-12 pl-5 my-3">
                        <img className="img-fluid" src={img} alt=""/>
                    </div>
                </div>
            </div>
        </main>
    );
};


export default Main;