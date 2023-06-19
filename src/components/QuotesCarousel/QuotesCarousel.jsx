import React from "react";
import Slider from "react-slick";
import SlideComponent from "../SlideComponent/SlideComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { AnimatePresence, motion } from "framer-motion";

const QuotesCarousel = ({ data }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 3000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {data.map((item, index) => {
          return <SlideComponent item={item} position={index} key={item.id} />;
        })}
      </Slider>
    </div>
  );
};

export default QuotesCarousel;
