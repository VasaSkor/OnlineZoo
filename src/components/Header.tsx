import React from 'react';
import burger from '../assets/icon/burger_menu.svg'
import '../styles/Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <a href='../' className="header__container-logo">
                    <h1 className="header__container-logo-title">PetStory online</h1>
                </a>
                <nav className="header__container-nav">
                    <img className='header__container-nav-menu__burger'
                         src={burger}
                         alt='burger_menu_icon'/>
                    <ul className="header__container-nav-list">
                        <li className="header__container-nav-list-item">About</li>
                        <li className="header__container-nav-list-item">Map</li>
                        <li className="header__container-nav-list-item">Zoos</li>
                        <li className="header__container-nav-list-item">Donate</li>
                        <li className="header__container-nav-list-item">Contact us</li>
                        <li className="header__container-nav-list-item">Designed by ©</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
