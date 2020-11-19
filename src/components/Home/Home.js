import React from 'react';
import Achievement from './Achievement/Achievement';
import DedicatedTeam from './DedicatedTeam/DedicatedTeam';
import Footer from './Footer/Footer';
import Main from './Main/Main';

import Navbar from './Navbar/Navbar';
import Running from './Running/Running';
import Wedo from './Wedo/Wedo';

const Home = () => {
    return (
        <div>
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