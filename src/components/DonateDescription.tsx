import React from 'react';
import '../styles/DonateDescription.scss'

const DonateDescription = () => {
    return (
        <section className='donate'>
            <div className='donate__container'>
                <h3 className='donate-title'>
                    THE ZOO HAS OFFICIALLY REOPENED BUT WE STILL NEED YOUR HELP!
                </h3>
                <p className='donate-text'>
                    <b>
                        Even though the Zoo has been able to reopen, we are at a greatly
                        reduced capacity with educational programs and public and private
                        events cancelled or postponed for additional months.
                    </b>
                    &nbsp;We need you now more than ever to help ensure that we overcome these
                        challenges. We have been actively raising funds in the community,
                        and we are grateful for the generosity.&nbsp;
                    <b>
                        But much more support is still needed, and we need your help!
                        Please consider a gift today – no matter what size – to help
                        us sustain our mission.
                    </b>
                </p>
                <h3 className='donate-description'>
                    Donation Information
                </h3>
            </div>
        </section>
    );
};

export default DonateDescription;