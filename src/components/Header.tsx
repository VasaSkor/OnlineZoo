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
                        <li className="header__container-nav-list-item">
                            <Link to='https://www.google.com/maps'>
                                Map
                            </Link>
                        </li>
                        <li className="header__container-nav-list-item">
                            <Link to='https://ru.wikipedia.org/wiki/%D0%97%D0%BE%D0%BE%D0%BF%D0%B0%D1%80%D0%BA'>
                            Zoos
                            </Link>
                        </li>
                        <li className="header__container-nav-list-item">
                            <NavLink to='/donate' end>
                                Donate
                            </NavLink>
                        </li>
                        <li className="header__container-nav-list-item">
                            <Link to='https://github.com/VasaSkor'>
                            Contact us
                            </Link>
                        </li>
                        <li className="header__container-nav-list-item">
                            <Link to='https://www.figma.com/file/ypzT9idgAILaSRVRmDAJxn/online-zoo-3-weeks?type=design&node-id=0-1&mode=design&t=syLRuxBa9haI2p4G-0'>
                            Designed by ©
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
