// PartnerCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PartnerCarousel = ({ logos, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="partner-logo section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="partner_title">
              <h3>{title || "Trusted Companies Around The World!"}</h3>
            </div>
            <Slider {...settings} className="partner-carousel">
              {logos.map((logo, index) => (
                <div key={index} className="partner-item">
                  <a href={logo.link || "#"}>
                    <img src={logo.src} alt={logo.alt || `partner-${index}`} />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;
