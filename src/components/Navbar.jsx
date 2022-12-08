import React, {useState}  from 'react';
import './Navbar.css';
import ServicesMenu from './ServicesMenu';
import AboutMenu from './AboutMenu';
function Navbar () {
    const [menuIcon, setMenuIcon] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [showNav, setShowNav] = useState(false);
    return(
        <>
        <nav>
            <a href="index.html">
                <img src="https://www.nimbus.com.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNimbus_Logo.b483055b.png&w=256&q=75" alt="nimbus-logo" width="80px" height= "60px"/>
            </a>
            <div>
                <ul className={showNav ?'navbar__list active':'navbar__list'}
                onClick={() => setShowNav(true)}>
                    <li className="navbar__list-item">
                        <a className='active' href="index.html">Home</a>
                    </li>
                    <li  className="navbar__list-item">
                        <a href="index.html">Services</a>
                         
                    </li>
                    
                    <li  className="navbar__list-item">
                        <a href="index.html">Gallery</a>
                    </li>
                    <li  className="navbar__list-item">
                        <a href="index.html">About</a>
                    </li>
                    <li  className="navbar__list-item">
                        <a href="index.html">Nimbus Aid Project</a>
                    </li>
                    <li  className="navbar__list-item">
                        <a href="index.html">Blog</a>
                    </li>
                    <li  className="navbar__list-item">
                        <a href="./home">Contact Us</a>
                    </li>
                </ul>
                <div id='mobile-menu' 
                onClick={()=>
                   setMenuIcon(!menuIcon)}>
                    <i id='bars' className={ menuIcon ?'fas fa-xmark' : 'fas fa-bars'}></i>
                </div>
            </div>
        </nav>
        
        </>

    )
    
}

export default Navbar;