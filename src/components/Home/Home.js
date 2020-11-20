import React from 'react';
import Achievement from './Achievement/Achievement';
import DedicatedTeam from './DedicatedTeam/DedicatedTeam';
import Footer from './Footer/Footer';
import Main from './Main/Main';

import Navbar from './Navbar/Navbar';
import Running from './Running/Running';
import Wedo from './Wedo/Wedo';
import './Home.css';
import img from'../../icon/Group45@2x.png';
import img2 from '../../icon/Group 46@2x.png';
const Home = () => {
    return (
        <div>
          <div className="bg-photo">
            <img src={img} alt=""/>
                
          </div>

              <h1 className="bg-name">STUDIO</h1>
                <h1 className="bg-name bg-name-two">ST</h1>
   
      
            <div className="bg-image-div">
                     
                 <img className="bg-image-two" src={img2} alt=""/>
            </div>
            <div className="circle-one"> </div>
              <div className="circle-two"> </div>
              <div className="circle-three"> </div>
          <Navbar></Navbar>  
          <Main></Main>
          <Wedo></Wedo>
          <Running></Running>
          <Achievement />
          <DedicatedTeam />
          <Footer></Footer>
        </div>
    );
};

export default Home;<Navbar></Navbar>