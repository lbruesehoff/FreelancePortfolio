"use client";

import animationData from "./animationData.json";
import { useLottie } from "lottie-react";

const MyLottieComponent = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div className="">{View}</div>
    </>
  );
};

export default MyLottieComponent;
