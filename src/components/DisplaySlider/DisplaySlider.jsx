import React from "react";
import Slider from "infinite-react-carousel";
import car from "../../assets/image/car.png";
import lazard from "../../assets/image/lazard.png";

const DisplaySlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
    className: "slide_box",
    dots: true,
    virtualList: true,
    duration: 20,
    arrows: true,
  };
  return (
    <div className="display-slider-wrapper">
      <Slider {...settings}>
        <div className="row">
          <img
            src={car}
            className="slide_img col-lg-12"
            alt="Responsive img"
            width="100%"
            height="600px"
          />
        </div>
        <div className="row">
          <img
            src={lazard}
            className="slide_img col-lg-12"
            alt="Responsive img"
            width="100%"
            height="600px"
          />
        </div>
      </Slider>
      <div>Swipe to see more images!</div>
    </div>
  );
};

export default DisplaySlider;
