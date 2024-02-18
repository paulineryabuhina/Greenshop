import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
                <div className='header__content'>
                    <img src={require('./logo.png')} className="header__logo"></img>
                    <div className="header__navigation">
                        <a className='header__link' href=''>Home</a>
                        <a className='header__link' href=''>Shop</a>
                        <a className='header__link' href=''>Plant Care</a>
                        <a className='header__link' href=''>Blogs</a>
                    </div>
                    <div className="header__left">
                        <button className="header__search"></button>
                        <button className="header__cart"></button>
                        <button className='header__login'>Login</button>
                    </div>
                </div>
                <div className='header__line'></div>
        </header>
    );
};
export default Header;
