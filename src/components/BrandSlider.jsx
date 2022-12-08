import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brandLogo from "./BrandLogo";

const BrandSlider = () => {
  
    const settings = {
      infinite: true,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
     
    };
    return (
      <>
        <div className="BrandSlider">
          <Slider {...settings}>
            {brandLogo.map((item) => (
              <div key={item.id}>
                <img src={item.src} className="brand-icons" alt={item.alt} width="70px" height="50px" />
              </div>
            ))}
            
          </Slider>
        </div>
            </>
    )
  }
  export default BrandSlider;