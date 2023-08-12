import React from 'react';
import Panda from "../Panda";
import DonateDescription from "../DonateDescription";

const Donate = () => {
    return (
        <main className='donate-page'>
            <Panda/>
            <DonateDescription/>
        </main>
    );
};

export default Donate;