import React from 'react';
import user1 from '../assets/icon/user_1.svg'
import user2 from '../assets/icon/user_2.svg'
import user3 from '../assets/icon/user_3.svg'
import user4 from '../assets/icon/user_4.svg'
import MyButton from "./UI/button/MyButton";
import MyRangeInput from "./UI/input/MyRangeInput";
import '../styles/Testimonials.scss'
import TestimonialCard from "./TestimonialCard";
const Testimonials = () => {
    return (
        <section className='testimonials'>
            <div className='testimonials__container'>
                <h3 className='testimonials__container-title'>Testimonials</h3>
                <div className='testimonials__wrapper'>
                    <div className='testimonials__wrapper-cards'>
                        <TestimonialCard
                            current={true}
                            src={user1}
                            alt='user1'
                            name='Michael John'
                            location='Local Austria'
                            date='Today'
                            main='The best online zoo I’ve met. My son delighted very much ljves to watch
                                gouillas. Online zoo is one jf the ways to instill a love for animals.
                                The best online zoo I’ve met. My son delighted very much ljves to watch
                                gouillas. Online zoo is one jf the ways to instill a love for animals.
                                The best online zoo I’ve met. My son delighted very much ljves to watch
                                gouillas. Online zoo is one jf the ways to instill a love for animals
                                .The best online zoo I’ve met. My son delighted very much ljves to watch
                                gouillas. Online zoo is one jf the ways to instill a love for animals.'
                        />
                        <TestimonialCard
                            current={true}
                            src={user2}
                            alt='user2'
                            name='Oskar Samborsky'
                            location='Local Austria'
                            date='Yesterday'
                            main='Online zoo is one jf the ways to instill a love for animals.The
                                best online zoo I’ve met. My son delighted very much ljves to watch
                                gouillas. Online zoo is one jf the ways to instill a love for animals.
                                The best online zoo I’ve met. My son delighted very much ljves to watch
                                gouillas.
                                The best online zoo I’ve met. My son delighted very much ljves to
                                watch gouillas. Online zoo is one jf the ways to instill a love
                                for animals.The best online zoo I’ve met. My son delighted very
                                much ljves to watch gouillas. Online zoo is one jf the ways to instill
                                a love for animals.
                                The best online zoo I’ve met. My son delighted very much ljves
                                to watch gouillas. Online zoo is one jf the ways to instill a
                                love for animals.The best online zoo I’ve met. My son delighted
                                very much ljves to watch gouillas. Online zoo is one jf the ways
                                to instill a love for animals.'
                        />
                        <TestimonialCard
                            current={true}
                            src={user3}
                            alt='user3'
                            name='Fredericka Michelin'
                            location='Local Austria'
                            date='Yesterday'
                            main='The best online zoo I’ve met. My son delighted very much ljves to watch
                                gouillas. Online zoo is one jf the ways to instill a love for animals.
                                The best online zoo I’ve met. My son delighted very much ljves to watch
                                gouillas. Online zoo is one jf the ways to instill a love for animals.
                                The best online zoo I’ve met. My son delighted very much ljves
                                to watch gouillas. Online zoo is one jf the ways to instill a
                                love for animals.The best online zoo I’ve met.
                                The best online zoo I’ve met. My son delighted very much ljves
                                to watch gouillas. Online zoo is one jf the ways to instill a
                                love for animals.The best online zoo I’ve met. My son delighted
                                very much ljves to watch gouillas. Online zoo is one jf the ways
                                to instill a love for animals.'
                        />
                        <TestimonialCard
                            current={true}
                            src={user4}
                            alt='user4'
                            name='Mila Riksha'
                            location='Local Austria'
                            date='Yesterday'
                            main='My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas.
                                The best online zoo I’ve met. My son delighted very much ljves to
                                watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.The best online zoo I’ve met. My son delighted very much ljves
                                to watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.'
                        />
                        <TestimonialCard
                            current={false}
                            src={user4}
                            alt='user4'
                            name='Mila Riksha'
                            location='Local Austria'
                            date='Yesterday'
                            main='My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas.
                                The best online zoo I’ve met. My son delighted very much ljves to
                                watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.The best online zoo I’ve met. My son delighted very much ljves
                                to watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.'
                        />
                        <TestimonialCard
                            current={false}
                            src={user4}
                            alt='user4'
                            name='Mila Riksha'
                            location='Local Austria'
                            date='Yesterday'
                            main='My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas.
                                The best online zoo I’ve met. My son delighted very much ljves to
                                watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.The best online zoo I’ve met. My son delighted very much ljves
                                to watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.'
                        />
                        <TestimonialCard
                            current={false}
                            src={user4}
                            alt='user4'
                            name='Mila Riksha'
                            location='Local Austria'
                            date='Yesterday'
                            main='My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas.
                                The best online zoo I’ve met. My son delighted very much ljves to
                                watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.The best online zoo I’ve met. My son delighted very much ljves
                                to watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.'
                        />
                        <TestimonialCard
                            current={false}
                            src={user4}
                            alt='user4'
                            name='Mila Riksha'
                            location='Local Austria'
                            date='Yesterday'
                            main='My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas.
                                The best online zoo I’ve met. My son delighted very much ljves to
                                watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.The best online zoo I’ve met. My son delighted very much ljves
                                to watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.'
                        />
                        <TestimonialCard
                            current={false}
                            src={user4}
                            alt='user4'
                            name='Mila Riksha'
                            location='Local Austria'
                            date='Yesterday'
                            main='My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas.
                                The best online zoo I’ve met. My son delighted very much ljves to
                                watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.The best online zoo I’ve met. My son delighted very much ljves
                                to watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.'
                        />
                        <TestimonialCard
                            current={false}
                            src={user4}
                            alt='user4'
                            name='Mila Riksha'
                            location='Local Austria'
                            date='Yesterday'
                            main='My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas.
                                The best online zoo I’ve met. My son delighted very much ljves to
                                watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.The best online zoo I’ve met. My son delighted very much ljves
                                to watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.'
                        />
                        <TestimonialCard
                            current={false}
                            src={user4}
                            alt='user4'
                            name='Mila Riksha'
                            location='Local Austria'
                            date='Yesterday'
                            main='My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas.
                                The best online zoo I’ve met. My son delighted very much ljves to
                                watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.The best online zoo I’ve met. My son delighted very much ljves
                                to watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.'
                        />
                        <TestimonialCard
                            current={false}
                            src={user4}
                            alt='user4'
                            name='Mila Riksha'
                            location='Local Austria'
                            date='Yesterday'
                            main='My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas. Online zoo is one
                                jf the ways to instill a love for animals.The best online zoo I’ve met.
                                My son delighted very much ljves to watch gouillas.
                                The best online zoo I’ve met. My son delighted very much ljves to
                                watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.The best online zoo I’ve met. My son delighted very much ljves
                                to watch gouillas. Online zoo is one jf the ways to instill a love for
                                animals.'
                        />
                    </div>
                </div>
                <MyRangeInput id='testimonials_input'/>
                <MyButton id='feedback' text='leave feedback'/>
            </div>
        </section>
    );
};

export default Testimonials;