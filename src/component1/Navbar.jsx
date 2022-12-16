import React from 'react'
import Slider1 from '../slider1/Slider1';
import Logo from './Logo'
import Menu from './Menu'

const Navbar = () => {
    return (
        <section id='navBlock'>
            <article>
                <Logo />
                <Menu />
            </article>
            <Slider1/>
        </section>
    );
}

export default Navbar;
