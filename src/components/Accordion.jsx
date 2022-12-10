import React, { useState } from 'react';
import './Accordion.css';
import {accordionData} from'./FAQ';

function Accordion() {
    const [isActive, setIsActive] = useState(false);
    const [activeCurrentIndex, setActiveCurrentIndex ] = useState();
    
    const toggleShowAccordion = (id) => {
        
        if(activeCurrentIndex === id){
            setActiveCurrentIndex();  
           
        } else {

            setActiveCurrentIndex(id);
            
        
            
        }
    } 
        
    return (
        <>
        <h3 className='accordion-heading'>Frequently Asked Questions</h3>
    <div className="accordion">
        {accordionData.map(({ id,title, content }) => (   
            <div className="accordion-item" key={id}>
                <div className="accordion-title" 
                onClick={() => toggleShowAccordion(id)}>
                    <div>{title}</div>
                    <div><i className={isActive ? "fas fa-xmark": "fas fa-plus"}></i></div>
                </div>
                {activeCurrentIndex === id && <div className="accordion-content">{content}</div>}
            </div>)
          )
        }    
      </div>  
        </>
    )
}
export default Accordion;