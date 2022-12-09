import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./Images";
import './ImageSlider.css';

const ImageSlider = () => {
  
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
         slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
         slidesToShow: 1,
        }
       }
    ]

  };


  return (
    <>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src}  alt={item.alt} />
            </div>
          ))}
          
        </Slider>
      </div>
          </>
  )


 }  
 export default ImageSlider;