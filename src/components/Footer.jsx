
import './Footer.css';

function Footer() {
    return (
        <>
        <div className="Footer">
            
           <div className="footer-content">
                <img src="https://www.nimbus.com.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNIMBUS_WHITE_LOGO.53936378.png&w=128&q=75" alt="Nimbus logo"/>
        
                <ul className="footer-icons">
                    <li className="footer-icon-list">
                    <a href="https://www.facebook.com/nimbusNG/" target="_blank" rel="noopener noreferrer"   className="footer-icon-link">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    </li>
                    <li className="footer-icon-list">
                        <a href='https://twitter.com/NimbusMediaNG' target="_blank" rel="noopener noreferrer"   className="footer-icon-link" >
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        </li>
                    <li className="footer-icon-list">
                        <a href="https://www.instagram.com/nimbusmediang/" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                           <i className="fa-brands fa-instagram"></i>
                    </a>
                    </li>
                    <li className="footer-icon-list">
                        <a  href="https://www.linkedin.com/company/nimbus-media-limited/" target="_blank" rel="noopener noreferrer"   className="footer-icon-link">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        
                    </li>
                </ul>
            </div>
            
            <ul className='footer-info'>
                <li>
                <i className="fa-solid fa-phone"></i>
                (+234)-706-327-4951
                </li>
                <li>
                    <i className="fa-solid fa-map-marker"></i>
                    Nimbus Media Limited, 16, Igbasan Street, Opebi, Ikeja, Lagos.
                </li>
                <li>
                    <i className="fa-solid fa-envelope"></i>
                    wale@nimbus.com.ng
                </li>
                
            </ul>
            
            

           
        
                    
            
                
        </div>
        </>
    )
}       

export default Footer;