import React from 'react';
import MyButton from "./UI/button/MyButton";
import '../styles/WatchOnline.scss'

const WatchOnline = () => {
    return (
        <section className='watch-online'>
            <div className='watch-online__container'>
                <div className='watch-online__container__circle'>
                    <span className='watch-online__container__circle-text'>
                        Watch your <span>favorite</span> animal online
                    </span>
                </div>
            <MyButton text='watch online' id="watch online"/>
            </div>
        </section>
    );
};

export default WatchOnline;