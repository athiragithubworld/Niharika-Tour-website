import React, { useState } from "react";
import Modal from "../common/Modal";
import PackageCard from "../packages/PackageCard";
import { keralaPackages, tamilnaduPackages } from "../../data/tourData";

const PackagesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const handlePackageClick = (pkgName) => {
    setSelectedPackage(pkgName);
    setShowModal(true);
  };

  return (
    <div className="page-content">
      <section className="page-hero">
        <h1>Tour Packages</h1>
        <p>Explore the Beauty of Kerala & Tamil Nadu</p>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Kerala Packages</h2>
          <div className="packages-grid">
            {keralaPackages.map((pkg, idx) => (
              <PackageCard
                key={idx}
                pkg={pkg}
                idx={idx}
                onClick={handlePackageClick}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray">
        <div className="container">
          <h2 className="section-title">Tamil Nadu Packages</h2>
          <div className="packages-grid">
            {tamilnaduPackages.map((pkg, idx) => (
              <PackageCard
                key={idx}
                pkg={pkg}
                idx={idx}
                onClick={handlePackageClick}
              />
            ))}
          </div>
        </div>
      </section>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={selectedPackage}
        message="For package price and complete details, please contact us via WhatsApp or Call."
      />
    </div>
  );
};

export default PackagesPage;
