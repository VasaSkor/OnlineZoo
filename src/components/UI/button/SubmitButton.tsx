import React from 'react';
import style from './SubmitButton.module.scss'

const SubmitButton = () => {
    return (
        <button className={style.subcribe_btn} id='send-email'>
            Submit
        </button>
    );
};

export default SubmitButton;