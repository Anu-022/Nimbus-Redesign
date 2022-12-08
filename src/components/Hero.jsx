import './Hero.css';
import ImageSlider from './ImageSlider';


function Hero () {
    return (
        <div className="Hero">
            <ImageSlider/>
            <div className='overlay'>
                <div className='overlay-text'>
                   <h1>We are the Leading Digital 
                    <br/>
                    <span id="text-highlight"> Out-of-Home </span> 
                     Advertising 
                    <br/>
                    Company in Nigeria.</h1>
                   <p>Reach over 1.5 million people across all platforms monthly. With our outstanding digital out-of-the home advertising opportunities, you are directly in the face of your target audience.</p>
                </div>
                <ul className="social-icons">
                    <li className="icons">
                    <i className="fa-brands fa-facebook"></i>
                    </li>
                    <li className="icons">
                        <i className="fa-brands fa-twitter"></i>
                        </li>
                    <li className="icons">
                        <i className="fa-brands fa-instagram"></i>
                        </li>
                    <li className="icons">
                        <i className="fa-brands fa-linkedin"></i>
                        </li>
                </ul>
                
                <button className="btn explore-btn">Explore</button>
               
            </div>
            
        </div>
        
        
        
        
    )
}

export default Hero;