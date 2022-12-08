import './Brands.css';
import BrandSlider from './BrandSlider';
function Brands() {
    return(
        <>
          <div className="Brands">
            <h3>Trusted by Agencies
              <br/>& Popular Brands
              </h3>
            <div className="BrandText">
                <p>We are committed to helping you build meaningful interaction and topnotch digital brand communications with customers everywhere and everytime.</p>
            </div>
            <div className="our-brands">
            <BrandSlider/>
            </div>
            
            
          </div>
        </>
    )
}

export default Brands;