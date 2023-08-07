import React from 'react';
import burger from '../assets/icon/burger_menu.svg'
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to='/' className="header__container-logo">
                    <h1 className="header__container-logo-title">PetStory online</h1>
                </Link>
                <nav className="header__container-nav">
                    <img className='header__container-nav-menu__burger'
                         src={burger}
                         alt='burger_menu_icon'/>
                    <ul className="header__container-nav-list">
                        <li className="header__container-nav-list-item">
                            <NavLink to='/' end>
                                About
                            </NavLink>
                        </li>
                        <li className="header__container-nav-list-item">Map</li>
                        <li className="header__container-nav-list-item">Zoos</li>
                        <li className="header__container-nav-list-item">
                            <NavLink to='/donate' end>
                                Donate
                            </NavLink>
                        </li>
                        <li className="header__container-nav-list-item">Contact us</li>
                        <li className="header__container-nav-list-item">Designed by ©</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
