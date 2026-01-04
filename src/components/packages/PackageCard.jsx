import React from "react";

const PackageCard = ({ pkg, idx, onClick }) => {
  return (
    <div
      className="package-card"
      onClick={() => onClick(pkg.name)}
      style={{ animationDelay: `${idx * 0.05}s` }}
    >
      <div
        className="package-image"
        style={{ backgroundImage: `url(${pkg.image})` }}
      ></div>
      <div className="package-info">
        <h3>{pkg.name}</h3>
        <button className="contact-info-btn">View Details</button>
      </div>
    </div>
  );
};

export default PackageCard;
