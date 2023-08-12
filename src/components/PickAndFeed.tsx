import React from 'react';
import pay from '../assets/icon/pay.svg'
import zoo from '../assets/icon/zoo.svg'
import monkey from '../assets/icon/monkey.svg'
import MyButton from "./UI/button/MyButton";
import '../styles/PickAndFeed.scss'
import {NavLink} from "react-router-dom";
const PickAndFeed = () => {
    return (
        <section className='pick-and-feed'>
            <div className='pick-and-feed-container'>
                <div className='pick-and-feed-content'>
                    <div className='pick-and-feed-content-text'>
                        <span className='pick-and-feed-content-text-title'>
                            Pick and feed a friend
                        </span>
                        <span className='pick-and-feed-content-text-sub-title'>
                            We know the animals bring you joy, and in these extraordinary times, we’re glad.
                        </span>
                        <span className='pick-and-feed-content-text-head'>
                            During a time when the COVID-19 epidemic is touching all of our lives, we’re proud
                            and glad that people around the world find joy in PetStory.
                        </span>
                        <p className='pick-and-feed-content-text-main'>
                            Even though the zoo has reopened, we need you now more than ever to help us deal
                            with these problems. Please consider a gift to our &nbsp;
                            <NavLink className="pick-and-feed-content-text-main-link" to='/donate' end>
                               Emergency Support Fund
                            </NavLink>
                            &nbsp;.
                        </p>
                    </div>
                    <span className='pick-and-feed-step-title'>How it works</span>
                    <div className='pick-and-feed-steps'>
                        <div className='pick-and-feed-step'>
                            <div className='pick-and-feed-step-img'>
                                <img src={pay} alt='pay'/>
                            </div>
                          <span className='pick-and-feed-step-text'>
                              Pay with card
                          </span>
                        </div>
                        <div className='pick-and-feed-step'>
                            <div className='pick-and-feed-step-img'>
                                <img src={zoo} alt='feed'/>
                            </div>
                            <span className='pick-and-feed-step-text'>
                              Payment goes to the zoo
                          </span>
                        </div>
                        <div className='pick-and-feed-step'>
                            <div className='pick-and-feed-step-img'>
                                <img src={monkey} alt='monkey'/>
                            </div>
                            <span className='pick-and-feed-step-text'>
                              Your favourite animal gets delicious dish
                          </span>
                        </div>
                    </div>
                    <NavLink to='/donate' end>
                        <MyButton id='feed' text='Feed a friend now'/>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default PickAndFeed;