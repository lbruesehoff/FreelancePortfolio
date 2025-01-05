"use client";

import animationData from "./seo.json";
import { useLottie } from "lottie-react";

const SeoComponent = () => {
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

export default SeoComponent;
