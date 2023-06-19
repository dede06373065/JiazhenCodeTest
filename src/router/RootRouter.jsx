import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdvantageAirButtonPage from "../page/advantage-air/AdvantageAirButton.page";
import AdvantageAirCarousalPage from "../page/advantage-air/AdvantageAirCarousal.page";
import AdvantageAirGridPage from "../page/advantage-air/AdvantageAirGrid.page";
import ResponsivePage from "../page/responsive/Responsive.page";
import HyundaiCardPage from "../page/hyundai/HyundaiCard.page";
import HyundaiVideoPage from "../page/hyundai/HyundaiVideo.page";
import FlightCentreButtonPage from "../page/flight-centre/FlightCentreButton.page";
import FlightCentreSlidePage from "../page/flight-centre/FlightCentreSlide.page";
import UqBackgroundPage from "../page/uq/UqBackground.page";
import CommbackButtonPage from "../page/commbank/CommbankButton.page";
import CommbackBackgroundPage from "../page/commbank/CommbankBackground.page";
export const RootRouter = () => {
  return (
    <Routes>
      {/* advantage-air */}
      <Route
        path={`/advantage-air/button`}
        element={<AdvantageAirButtonPage />}
      />
      <Route path={`/advantage-air/grid`} element={<AdvantageAirGridPage />} />
      <Route
        path={`/advantage-air/carousal`}
        element={<AdvantageAirCarousalPage />}
      />
      {/* Hyundai */}
      <Route path={`/hyundai/video`} element={<HyundaiVideoPage />} />
      <Route path={`/hyundai/card`} element={<HyundaiCardPage />} />
      {/* Flight Centre */}
      <Route
        path={`/flight-centre/button`}
        element={<FlightCentreButtonPage />}
      />
      <Route
        path={`/flight-centre/slide`}
        element={<FlightCentreSlidePage />}
      />
      {/* UQ */}
      <Route path={`/uq/background`} element={<UqBackgroundPage />} />
      {/* CommBank */}
      <Route path={`/commbank/button`} element={<CommbackButtonPage />} />
      <Route
        path={`/commbank/background`}
        element={<CommbackBackgroundPage />}
      />
      {/* Responsive */}
      <Route path={`/responsive`} element={<ResponsivePage />} />
      <Route path={"/"} element={<Navigate to="/advantage-air/button" />} />
    </Routes>
  );
};
