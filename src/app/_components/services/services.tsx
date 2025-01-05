import React from "react";
import "./services.css";
import ArrowComponent from "../animation/arrow/arrow";

const Services = () => {
  return (
    <div className="services-container">
      <div className="service-title-container">
        <h1 className="services-title">What I Offer</h1>
        <div className="services-arrow">
          <ArrowComponent />
        </div>
      </div>
      <p className="services-content">
        I specialize in creating professional, responsive, and user-friendly
        static websites tailored for small to medium-sized businesses. My
        services focus on delivering visually appealing designs that effectively
        showcase your brand and provide a seamless online experience for your
        customers. Whether you need a sleek portfolio, an engaging company
        website, or a simple landing page. With a commitment to quality and
        timely delivery, I help businesses establish a strong online presence
        that drives growth and engagement.
      </p>
      <div className="divider divider-primary"></div>
    </div>
  );
};

export default Services;
