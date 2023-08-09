import React from 'react';
import WatchOnline from "../WatchOnline";
import Backstage from "../Backstage";
import Pets from "../Pets";
import PickAndFeed from "../PickAndFeed";
import Testimonials from "../Testimonials";

const Home = () => {
    return (
        <main className='home'>
            <WatchOnline/>
            <Backstage/>
            <Pets/>
            <PickAndFeed/>
            <Testimonials/>
        </main>
    );
};

export default Home;