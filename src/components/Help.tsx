import React from 'react';
import panda from "../assets/icon/panda.svg";
import MyButton from "./UI/button/MyButton";
import '../styles/Help.scss'
const Help = () => {
    return (
        <section className='help'>
            <div className='help__container'>
                <div className='help__content'>
                    <h2 className='help__title'>
                        Pick and feed a friend
                    </h2>
                    <span className='help__sub-title'>
                        We know the animals bring you joy, and
                        in these extraordinary times, we’re glad.
                    </span>
                    <div className='help__donate'>
                        <div className='help__donate-calc'>
                            <div className='help__donate-calc_result'>
                                <span>
                                    4
                                </span>
                                <span>
                                    Panda diet for the day.
                                </span>
                            </div>
                            <div className='help__donate-calc-img'>
                                <img src={panda} alt='panda'/>
                            </div>
                        </div>
                        <span className='amount-text'>
                            Amount
                        </span>
                        <div className='donate__slider'>
                            <input type='radio' id='5k' name='amount' className='amount'/>
                            <input type='radio' id='2k' name='amount' className='amount'/>
                            <input type='radio' id='1k' name='amount' className='amount'/>
                            <input type='radio' id='500' name='amount' className='amount'/>
                            <input type='radio' id='250' name='amount' className='amount'/>
                            <input type='radio' id='100' name='amount' className='amount'/>
                            <input type='radio' id='50' name='amount' className='amount'/>
                            <input type='radio' id='25' name='amount' className='amount'/>
                        </div>
                        <div className='donate__labels'>
                            <label htmlFor="5k">$5000</label>
                            <label htmlFor="2k">$2000</label>
                            <label htmlFor="1k">$1000</label>
                            <label htmlFor="500">$500</label>
                            <label htmlFor="250">$250</label>
                            <label htmlFor="100">$100</label>
                            <label htmlFor="50">$50</label>
                            <label htmlFor="25">$25</label>
                        </div>
                        <input type='number'
                               className='amount__input'
                               placeholder='Another amount'
                        />
                        <fieldset>
                            <div>
                                <input type='radio'
                                       name='time'
                                       id='monthly'
                                       className='period'
                                />
                                <label className='period-name' htmlFor='monthly'>
                                    Monthly
                                </label>
                            </div>
                            <div>
                                <input type='radio'
                                       name='time'
                                       id='once'
                                       className='period'
                                       checked
                                />
                                <label className='period-name' htmlFor='once'>
                                    Once
                                </label>
                            </div>
                        </fieldset>
                        <MyButton id='donate-page-feed' text='Feed a friend now'/>
                        <span className='share-text'>
                            Share with your friends on social networks
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Help;