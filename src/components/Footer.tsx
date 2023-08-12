import React from 'react';
import '../styles/Footer.scss'
import SubmitButton from "./UI/button/SubmitButton";
import MyButton from "./UI/button/MyButton";
import facebook from '../assets/icon/facebook_icon.svg'
import twitter from '../assets/icon/twiter_icon.svg'
import instagram from '../assets/icon/instagram_icon.svg'
import youtube from '../assets/icon/youtube_icon.svg'
import {Link, NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className='footer__container'>
                <div className='footer__row'>
                     <Link to='/' className='footer__logo'>
                       <span className='footer__logo__title'>
                           PetStory online
                       </span>
                     </Link>
                    <form className='footer__form-subscribe'>
                        <label form='subscribe-email'
                               className='footer__form-subscribe-label'>
                            Subscribe to our news
                        </label>
                        <div className='footer__form-subscribe-input'>
                            <input id='subscribe-email'
                                   type='email'
                                   placeholder='Enter your email'
                                   required
                            />
                            <SubmitButton/>
                        </div>
                    </form>
                </div>
                <MyButton id='donate' text='donate for volunteers'/>
                <div className='footer__row'>
                    <nav className='footer__row-socials'>
                        <ul className='footer__row-socials-list'>
                           <li className='footer__row-socials-list-element'>
                               <img className='footer__row-socials-list-element-img'
                                    src={facebook}
                                    alt='facebook'/>
                               <a className='footer__row-socials-list-element-text'
                                  href='https://www.facebook.com/'>Facebook</a>
                           </li>
                            <li className='footer__row-socials-list-element'>
                                <img className='footer__row-socials-list-element-img'
                                     src={twitter}
                                     alt='twitter'/>
                                <a className='footer__row-socials-list-element-text'
                                   href='https://twitter.com/'>Twitter</a>
                            </li>
                            <li className='footer__row-socials-list-element'>
                                <img className='footer__row-socials-list-element-img'
                                     src={instagram}
                                     alt='instagram'/>
                                <a className='footer__row-socials-list-element-text'
                                   href='https://www.instagram.com/'>Instagram</a>
                            </li>
                            <li className='footer__row-socials-list-element'>
                                <img className='footer__row-socials-list-element-img'
                                     src={youtube}
                                     alt='youtube'/>
                                <a className='footer__row-socials-list-element-text'
                                   href='https://www.youtube.com/'>YouTube</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className='footer__row-menu'>
                        <ul className='footer__row-menu-list'>
                            <li className='footer__row-menu-list-element'>
                               <NavLink to='./' className='footer__row-menu-list-element-link'>
                                   About
                               </NavLink>
                            </li>
                            <li className='footer__row-menu-list-element'>
                                <a href='./' className='footer__row-menu-list-element-link'>
                                    Map
                                </a>
                            </li>
                            <li className='footer__row-menu-list-element'>
                                <a href='./' className='footer__row-menu-list-element-link'>
                                    Zoos
                                </a>
                            </li>
                            <li className='footer__row-menu-list-element'>
                                <a href='./' className='footer__row-menu-list-element-link'>
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p className='footer__row-copyright'>
                        <span className='footer__row-copyright-text'>
                            Designed by Alisa Samborskaya
                        </span>
                        <span className='footer__row-copyright-text'>
                            ©RSSchool & ©Yem Digital 2021
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;