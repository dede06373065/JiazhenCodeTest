import React from "react";
import IrregularBackground from "../../components/IrregularBackground/IrregularBackground";
import lizard from "../../assets/image/lazard.png";

const UqBackgroundPage = () => {
  return (
    <div className="uq-background-page">
      <IrregularBackground picture={lizard} />

      {/* <div className="uq-background-banner">
        <img src={lizard} alt="car" width="100%" height="100%" />
      </div> */}
    </div>
  );
};
export default UqBackgroundPage;
