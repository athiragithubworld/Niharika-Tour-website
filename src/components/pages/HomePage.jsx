import React, { useState } from "react";
import { Shield, ChevronRight } from "lucide-react";
import CTAButtons from "../common/CTAButtons";
import Modal from "../common/Modal";
import ServiceCard from "../services/ServiceCard";
import PackageCard from "../packages/PackageCard";
import { services, keralaPackages, tamilnaduPackages } from "../../data/tourData";

const HomePage = ({ setCurrentPage }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const handlePackageClick = (pkgName) => {
    setSelectedPackage(pkgName);
    setShowModal(true);
  };

  return (
    <div className="page-content">
      {/* Hero Section - Static Video Background */}
      <section className="hero">
        {/* Video Background - Hill Area 2 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-video"
        >
          <source src="/videos/hill area 2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Niharika Tour and Travels</h1>
          <p className="hero-subtitle">
            Premium Taxi & Tour Services across Kerala & Kanyakumari
          </p>
          <div className="hero-badge">
            <Shield size={24} />
            <span>Special Discounts for Defence Personnel</span>
          </div>
          <CTAButtons />
        </div>
      </section>

      {/* Featured Services */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.slice(0, 3).map((service, idx) => (
              <ServiceCard key={idx} service={service} idx={idx} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setCurrentPage("services")}
              className="link-btn"
            >
              View All Services <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="section-title">Popular Destinations</h2>
          <div className="packages-grid">
            {[
              ...keralaPackages.slice(0, 3),
              ...tamilnaduPackages.slice(0, 3),
            ].map((pkg, idx) => (
              <PackageCard
                key={idx}
                pkg={pkg}
                idx={idx}
                onClick={handlePackageClick}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setCurrentPage("packages")}
              className="link-btn"
            >
              View All Packages <ChevronRight size={20} />
            </button>
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

export default HomePage;
