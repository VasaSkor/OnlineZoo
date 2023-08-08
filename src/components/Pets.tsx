import React from 'react';
import arrow from '../assets/icon/arow.svg'
import panda from '../assets/image/Panda.png'
import eagles from '../assets/image/Eagle.png'
import gorillas from '../assets/image/Gorilla.png'
import sloth from '../assets/image/Sloth.png'
import cheetahs from '../assets/image/Cheetah.png'
import penguins from '../assets/image/Penguins.png'
import banana from '../assets/icon/banana-bamboo_icon.svg'
import meet from '../assets/icon/meet-fish_icon.svg'
import MyButton from "./UI/button/MyButton";
import '../styles/Pets.scss'
import Card from "./Card";

const Pets = () => {
    return (
        <section className='pets'>
            <button className='pets_btn' id='prev'>
                <img className='pets_btn-img' src={arrow} alt='arrow_prev' />
            </button>
            <div className='pets_container'>
                <div className='pets_container-wrapper'>
                    <div className='pets__cards'>
                        <Card
                            src={panda}
                            alt='panda'
                            name='giant Pandas'
                            map='Native to Southwest China'
                            type={banana}
                            typeAlt='vegan'
                        />
                        <Card
                            src={eagles}
                            alt='eagles'
                            name='Eagles'
                            map='Native to South America'
                            type={meet}
                            typeAlt='meet'
                        />
                        <Card
                            src={gorillas}
                            alt='gorillas'
                            name='Gorillas'
                            map='Native to Congo'
                            type={banana}
                            typeAlt='vegan'
                        />
                        <Card
                            src={sloth}
                            alt='sloth'
                            name='Two-toed Sloth'
                            map='Mesoamerica, South America'
                            type={banana}
                            typeAlt='vegan'
                        />
                        <Card
                            src={cheetahs}
                            alt='cheetahs'
                            name='cheetahs'
                            map='Native to Africa'
                            type={meet}
                            typeAlt='meet'
                        />
                        <Card
                            src={penguins}
                            alt='penguins'
                            name='Penguins'
                            map='Native to Antarctica'
                            type={meet}
                            typeAlt='meet'
                        />
                    </div>
                    <div className='pets__cards'>
                        <Card
                            src={penguins}
                            alt='penguins'
                            name='Penguins'
                            map='Native to Antarctica'
                            type={meet}
                            typeAlt='meet'
                        />
                        <Card
                            src={penguins}
                            alt='penguins'
                            name='Penguins'
                            map='Native to Antarctica'
                            type={meet}
                            typeAlt='meet'
                        />
                        <Card
                            src={penguins}
                            alt='penguins'
                            name='Penguins'
                            map='Native to Antarctica'
                            type={meet}
                            typeAlt='meet'
                        />
                        <Card
                            src={penguins}
                            alt='penguins'
                            name='Penguins'
                            map='Native to Antarctica'
                            type={meet}
                            typeAlt='meet'
                        />
                        <Card
                            src={penguins}
                            alt='penguins'
                            name='Penguins'
                            map='Native to Antarctica'
                            type={meet}
                            typeAlt='meet'
                        />
                        <Card
                            src={penguins}
                            alt='penguins'
                            name='Penguins'
                            map='Native to Antarctica'
                            type={meet}
                            typeAlt='meet'
                        />
                    </div>
                </div>
                <MyButton text='choose your favorite' id='choose-favorite'/>
            </div>
            <button className='pets_btn' id='next'>
                <img className='pets_btn-img-next next'
                     src={arrow}
                     alt='arrow_next' />
            </button>
        </section>
    );
};

export default Pets;