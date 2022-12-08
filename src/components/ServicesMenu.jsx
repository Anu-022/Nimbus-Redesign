import React, {useState}  from 'react';
import { serviceDropdown } from './Dropdown';
import './menu.css'

function ServicesMenu () {
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
        <div 
        className={dropdown ? "ServicesMenu clicked" : "ServicesMenu"}
        onClick={() => setDropdown(!dropdown)}>
            {serviceDropdown.map((item) => {
              return (
                <div id="submenu-list" key={item.id}>
                    <a href="#" id='submenu-item' onClick={() => setDropdown(false)}>{item.title}</a>
                    
                </div>
              )
            })}
        </div>
        </>
    )
}

export default ServicesMenu;