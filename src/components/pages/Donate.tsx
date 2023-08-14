import React from 'react';
import Panda from "../Panda";
import DonateDescription from "../DonateDescription";
import Help from "../Help";
import '../../styles/Panda.scss'

const Donate = () => {
    return (
        <main className='donate-page'>
            <Panda/>
            <DonateDescription/>
            <Help/>
        </main>
    );
};

export default Donate;