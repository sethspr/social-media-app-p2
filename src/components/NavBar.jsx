import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import './NavBar.css';
import Logo from '/Users/sethspring/Development/Code/Phase-2/social-media-app-p2/src/Assets/VibesLogo.png';

const NavBar = ({search, setSearch}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    

    return (
        <nav>
            <div className="logo-search-container">
                <Link to="/" className="logo">
                    <img src={Logo} alt="" />
                </Link>
                <div className='searchBar'>
                    <input type='text' className='search' placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>
            </div>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
                <li>
                    <NavLink className='links' to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className='links' to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className='links' to="/cool">Cool</NavLink>
                </li>
            </ul>
        </nav>
        
    );
}

export default NavBar;