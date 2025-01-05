import React from "react";
import "./feature.css";
import MyLottieComponent from "../animation/lottie";
import RocketComponent from "../animation/rocket/rocket";
import SeoComponent from "../animation/seo/seo";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_store/store-config";

const Feature = () => {
  const theme = useSelector((state: RootState) => state.home.theme);
  console.log(theme);

  const cardData = [
    {
      title: "Stronger Brand Identity",
      subTitle: "Simplicity",
      content:
        "Simplicity highlights your brand’s core values and message without unnecessary noise.",
      image: <MyLottieComponent />,
    },
    {
      title: "Faster Loading Times",
      subTitle: "Speed",
      content:
        "Simple websites load faster, which is crucial for retaining visitors and improving SEO.",
      image: <RocketComponent />,
    },
    {
      title: "Improved SEO",
      subTitle: "Search Engine Optimization",
      content:
        "Simple websites are easier to crawl, which improves SEO and helps your site rank higher on search engines.",
      image: <SeoComponent />,
    },
  ];

  return (
    <div className="feature-container">
      <h1 className="feature-title">Simple Websites</h1>
      <div className="card-container">
        {/* CARD START */}
        {cardData.map((card, index) => (
          <div
            className={`feature-card card ${
              theme === "night" ? "bg-neutral" : "bg-primary"
            } lg:card-side bg-base-100 shadow-xl`}
            key={index}
          >
            <figure className="card-image">{card.image}</figure>
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.content}</p>
              <div className="card-actions justify-end">
                <button
                  className={`btn ${theme === "night" ? "btn-primary" : ""}`}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* CARD END */}
      </div>
    </div>
  );
};

export default Feature;
