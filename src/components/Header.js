import React from 'react';
import troll from '../assets/troll.png'

const Header = () => {
    return (
        <header className='header'>
            <img src={troll} alt='troll' className='header--image'></img>
            <span className='header--title'>Meme Generator</span>
        </header>
    )
}

export default Header;