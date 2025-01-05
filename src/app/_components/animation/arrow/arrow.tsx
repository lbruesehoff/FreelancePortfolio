"use client";

import animationData from "./arrow.json";
import { useLottie } from "lottie-react";

const ArrowComponent = () => {
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

export default ArrowComponent;
