import React from 'react';

export default function Header() {
    return (
        <header className='welcome-header'>
            <div className='logo-menu-box'>
                <a href='http://localhost:3000'> 
                    <img className='logo-svg' src= 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' />
                </a>
                <button className='menu-button-mobile'>MENU &#9776;</button>
            </div>
            <ul className='nav-link-box'>
                <li className='nav-link'>SERVICES</li>
                <li className='nav-link'>PORTFOLIO</li>
                <li className='nav-link'>ABOUT</li>
                <li className='nav-link'>TEAM</li>
                <li className='nav-link'>CONTACT</li>

            </ul>
        </header>
    );
}