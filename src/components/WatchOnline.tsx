import React from 'react';
import MyButton from "./UI/button/MyButton";
import '../styles/WatchOnline.scss'

const WatchOnline = () => {
    return (
        <section className='watch-online'>
            <div className='watch-online-container'>
                <div className='watch-online-container-circle'>
                    <span className='watch-online-container-circle-text'>
                        Watch your <span>favorite</span> animal online
                    </span>
                </div>
            <MyButton/>
            </div>
        </section>
    );
};

export default WatchOnline;