import React from "react";

const IrregularTextBackground = ({ picture, title, text }) => {
  return (
    <div className="page-wrapper">
      <div className="background-banner">
        <div className="banner-left">
          <h1>{title}</h1>
          <div>{text}</div>
        </div>
        <div className="banner-right">
          <img src={picture} alt="car" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default IrregularTextBackground;
