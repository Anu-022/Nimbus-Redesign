import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PastWorkSlider.css';


const PastWorkSlider = () => {

   const PastWorkImg = [
       {
           id: 1,
           src: "https://www.nimbus.com.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FadvertisingImg.296810ac.png&w=1920&q=75",
           alt: "past-works"
       },
       {
           id: 2,
           src: "https://www.nimbus.com.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FguerrilaImg.e756f067.JPG&w=1920&q=75",
           alt: "past-works "
       },
       {
           id: 3,
           src: "https://www.nimbus.com.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbrandingImg.5fed78da.png&w=1920&q=75",
           alt: "past-works"
       }



   ];

  
  const settings = {
    infinite: false,
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
         slidesToShow: 0,
         slidesToScroll: 0,
         
        }
      },
      {
        breakpoint: 414,
        settings: {
         slidesToShow: 1,
         infinite: true,
         slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        dots: true,
        
        }
       }
    ]

  };


  return (
    <>
      <div className="PastWorkSlider">
        <Slider {...settings}>
          {PastWorkImg.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt}/>
            </div>
          ))}
          
        </Slider>
      </div>
          </>
  )


 }  
 export default PastWorkSlider;