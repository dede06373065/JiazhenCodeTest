import React from "react";

const IrregularBackground = ({ picture }) => {
  return (
    <div className="page-wrapper">
      <div className="uq-background-banner">
        <img src={picture} alt="car" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default IrregularBackground;
