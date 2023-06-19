import React from "react";
import Card from "../../components/Card/Card";
import { useKeenSlider } from "keen-slider/react";

const HyundaiCardPage = () => {
  const SLIDE_OPTIONS = {
    loop: false,
    vertical: false,
    slides: {
      mode: "free",
      perView: 5,
      spacing: 0,
    },
    breakpoints: {
      "(max-width: 2000px)": {
        slides: {
          perView: 5,
          // spacing: 10,
        },
      },
      "(max-width: 1800px)": {
        slides: {
          perView: 5,
          // spacing: 15,
        },
      },
      "(max-width: 1450px)": {
        slides: {
          perView: 4,
          // spacing: 15,
        },
      },
      "(max-width: 950px)": {
        slides: {
          perView: 4,
          // spacing: 10,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 3,
          // spacing: 10,
          mode: "snap",
        },
      },
      "(max-width: 400px)": {
        slides: {
          perView: 1,
          // spacing: 5,
          mode: "snap",
        },
      },
    },
  };
  const [sliderRef] = useKeenSlider(SLIDE_OPTIONS);
  return (
    <div className="hyundai-card-page">
      <div className="slider-container">
        <div className="hyundai-card-wrapper keen-slider" ref={sliderRef}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
export default HyundaiCardPage;
