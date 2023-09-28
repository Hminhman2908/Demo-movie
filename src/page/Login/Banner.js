import React from "react";
import bgAnimate from "./animation_ln22u4ei.json";
import Lottie from "lottie-react";

export default function Banner() {
  return (
    <div className="w-1/2">
      <Lottie animationData={bgAnimate} loop={true}></Lottie>
    </div>
  );
}
