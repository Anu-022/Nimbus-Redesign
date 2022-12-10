import { Component } from 'react';
import './Navbar.css';
class Navbar extends Component {
    state = {clicked: false};
    handleClick = ()=>{
        this.setState({clicked:
        !this.state.clicked})
    }
    
    render() {
    
     return(
        <>
        <nav>
            <a href="index.html">
                <img src="https://www.nimbus.com.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNimbus_Logo.b483055b.png&w=256&q=75" alt="nimbus-logo" width="80px" height= "60px"/>
            </a>
            <div>
                <ul id="navbar__list"
                className={this.state.clicked?'#navbar__list expanded':'#navbar__list'}>
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
                onClick={this.handleClick}>
                    <i id='bars' className={ this.state.clicked ?'fas fa-xmark' : 'fas fa-bars'}></i>
                </div>
            </div>
        </nav>
        
        </>

    )
    
}
}

export default Navbar;