import React from 'react';
import Achievement from './Achievement/Achievement';
import DedicatedTeam from './DedicatedTeam/DedicatedTeam';
import Main from './Main/Main';

import Navbar from './Navbar/Navbar';
import Wedo from './Wedo/Wedo';

const Home = () => {
    return (
        <div>
          <Navbar></Navbar>  
          <Main></Main>
          <Wedo></Wedo>

          <Achievement />
          <DedicatedTeam />
        </div>
    );
};

export default Home;<Navbar></Navbar>