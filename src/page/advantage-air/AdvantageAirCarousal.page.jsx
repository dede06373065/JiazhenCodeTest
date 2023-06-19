import React from "react";
import QuotesCarousel from "../../components/QuotesCarousel/QuotesCarousel";
import car from "../../assets/image/car.png";
import lizard from "../../assets/image/lazard.png";

const AdvantageAirCarousalPage = () => {
  const data = [
    {
      id: "1",
      image: car,
      detail:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
    {
      id: "2",
      image: lizard,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
  ];
  return (
    <div className="air-carousal-page">
      <div className="air-carousal-wrapper">
        <QuotesCarousel data={data} />
      </div>
    </div>
  );
};
export default AdvantageAirCarousalPage;
