import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Elegant and Functional Website Design for Your Brand
          </h1>
          <p className="py-6">
            Crafting simple, elegant websites designed to captivate and deliver
            a seamless user experience. Perfect for showcasing your brand with
            clarity and style.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
