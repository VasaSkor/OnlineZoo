import React from 'react';
import cap from '../assets/image/bamboo-cap.png'
import '../styles/Backstage.scss'

const Backstage = () => {
    return (
        <section className='backstage'>
            <div className='backstage__container'>
                <div className='backstage__content'>
                    <img className='backstage__content-img'
                         src={cap}
                         alt='Cap_image'/>
                    <div className='backstage__content-text'>
                        <h2>The Backstage of the Wilderness World.</h2>
                        <p>The site was founded on the basis of a volunteer movement
                            to protect and care for animals.</p>
                        <span className='backstage__content-subtitle'>How it works </span>
                        <p>
                            The main goal is to help the animals, as well as the nature reserves and zoos
                            where they are kept. We are currently working on video projects targeting pandas
                            in China, eagles on an island near Los Angeles, alligators in Florida and gorillas
                            in the Congo. These have a total of more than 1,500 mammals and reptiles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Backstage;