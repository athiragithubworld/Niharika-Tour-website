import React from "react";
import CTAButtons from "../common/CTAButtons";

const ServiceCard = ({ service, idx, large = false }) => {
  const Icon = service.icon;

  if (large) {
    return (
      <div
        className="service-card-large"
        style={{ animationDelay: `${idx * 0.1}s` }}
      >
        <div
          className="service-image-large"
          style={{ backgroundImage: `url(${service.image})` }}
        ></div>
        <div className="service-content-large">
          <div className="service-text-content-large">
            <Icon size={48} className="service-icon-large" />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
          <CTAButtons />
        </div>
      </div>
    );
  }

  return (
    <div className="service-card" style={{ animationDelay: `${idx * 0.1}s` }}>
      <div
        className="service-image"
        style={{ backgroundImage: `url(${service.image})` }}
      ></div>
      <div className="service-content">
        <div className="service-text-content">
          <Icon size={40} className="service-icon" />
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </div>
        <CTAButtons />
      </div>
    </div>
  );
};

export default ServiceCard;
