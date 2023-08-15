import React, {ChangeEvent, useState} from 'react';
import panda from "../assets/icon/panda.svg";
import MyButton from "./UI/button/MyButton";
import '../styles/Help.scss'
const Help = () => {
    const [selectedAmount,
        setSelectedAmount] = useState<string | null>(null);
    const [customAmount, setCustomAmount] = useState<string>('');


    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedId = event.target.id;
        setSelectedAmount(selectedId);
        setCustomAmount(selectedId);
    };

    const handleCustomAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const truncatedValue = value.slice(0, 4);
        setCustomAmount(truncatedValue);

        if (truncatedValue === '5000' ||
            truncatedValue === '2000' ||
            truncatedValue === '1000' ||
            truncatedValue === '500' ||
            truncatedValue === '250' ||
            truncatedValue === '100' ||
            truncatedValue === '50' ||
            truncatedValue === '25') {
            setSelectedAmount(truncatedValue);
        } else {
            setSelectedAmount(null);
        }
    };

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
                            <input type='radio'
                                   id='5000'
                                   name='amount'
                                   className='amount'
                                   onChange={handleAmountChange}
                                   checked={selectedAmount === '5000'}/>
                            <input type='radio'
                                   id='2000'
                                   name='amount'
                                   className='amount'
                                   onChange={handleAmountChange}
                                   checked={selectedAmount === '2000'}/>
                            <input type='radio'
                                   id='1000'
                                   name='amount'
                                   className='amount'
                                   onChange={handleAmountChange}
                                   checked={selectedAmount === '1000'}/>
                            <input type='radio'
                                   id='500'
                                   name='amount'
                                   className='amount'
                                   onChange={handleAmountChange}
                                   checked={selectedAmount === '500'}/>
                            <input type='radio'
                                   id='250'
                                   name='amount'
                                   className='amount'
                                   onChange={handleAmountChange}
                                   checked={selectedAmount === '250'}/>
                            <input type='radio'
                                   id='100'
                                   name='amount'
                                   className='amount'
                                   onChange={handleAmountChange}
                                   checked={selectedAmount === '100'}/>
                            <input type='radio'
                                   id='50'
                                   name='amount'
                                   className='amount'
                                   onChange={handleAmountChange}
                                   checked={selectedAmount === '50'}/>
                            <input type='radio'
                                   id='25'
                                   name='amount'
                                   className='amount'
                                   onChange={handleAmountChange}
                                   checked={selectedAmount === '25'}/>
                        </div>
                        <div className='donate__labels'>
                            <label htmlFor="5000"
                                   className={selectedAmount === '5000' ? 'active' : ''}>$5000</label>
                            <label htmlFor="2000"
                                   className={selectedAmount === '2000' ? 'active' : ''}>$2000</label>
                            <label htmlFor="1000"
                                   className={selectedAmount === '1000' ? 'active' : ''}>$1000</label>
                            <label htmlFor="500"
                                   className={selectedAmount === '500' ? 'active' : ''}>$500</label>
                            <label htmlFor="250"
                                   className={selectedAmount === '250' ? 'active' : ''}>$250</label>
                            <label htmlFor="100"
                                   className={selectedAmount === '100' ? 'active' : ''}>$100</label>
                            <label htmlFor="50"
                                   className={selectedAmount === '50' ? 'active' : ''}>$50</label>
                            <label htmlFor="25"
                                   className={selectedAmount === '25' ? 'active' : ''}>$25</label>
                        </div>
                        <input
                            type='number'
                            className='amount__input'
                            placeholder='Another amount'
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            min={0}
                            max={9999}
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