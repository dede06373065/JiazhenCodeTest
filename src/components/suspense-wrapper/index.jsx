import React, { Suspense } from "react";

import { LoadingScreen } from "../loading-screen/LoadingScreen.component";

export const SuspenseWrapper = ({ children }) => {
  return <Suspense fallback={<LoadingScreen />}>{children}</Suspense>;
};
