"use client";

import animationData from "./rocket.json";
import { useLottie } from "lottie-react";

const RocketComponent = () => {
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

export default RocketComponent;
