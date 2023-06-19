import React from "react";
import IrregularTextBackground from "../../components/IrregularTextBackground/IrregularTextBackground";
import car from "../../assets/image/car.png";

const CommbackBackgroundPage = () => {
  return (
    <div className="commbank-page">
      <div className="commbank-banner">
        <IrregularTextBackground
          picture={car}
          title="CommBank Home Loans for real bank"
          text="Discover a range of tools, tips and financial support options to help you with the everyday cost of living."
        />
      </div>
    </div>
  );
};
export default CommbackBackgroundPage;
