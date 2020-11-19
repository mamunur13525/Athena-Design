import React from 'react';
import './Main.css';
import img from '../../../icon/16[Converted]@2x.png';


const Main = () => {
    return (
        <main>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-5 mt-5">
                        <h1 className="title">Florence <br/> agency</h1>
                        <p className="lead my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis iste ratione quos quod, deserunt dignissimos accusantium neque. Repellendus, possimus?</p>
                        <button>See Pricing</button>
                    </div>
                    <div className="col-md-6 ml-5">
                        <img className="img-fluid" src={img} alt=""/>
                    </div>
                </div>
            </div>
        </main>
    );
};


export default Main;