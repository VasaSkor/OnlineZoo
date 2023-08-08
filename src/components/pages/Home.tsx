import React from 'react';
import WatchOnline from "../WatchOnline";
import Backstage from "../Backstage";
import Pets from "../Pets";

const Home = () => {
    return (
        <main className='home'>
            <WatchOnline/>
            <Backstage/>
            <Pets/>
        </main>
    );
};

export default Home;