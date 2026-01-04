import React from "react";
import ServiceCard from "../services/ServiceCard";
import { services } from "../../data/tourData";

const ServicesPage = () => (
  <div className="page-content">
    <section className="page-hero">
      <h1>Our Services</h1>
      <p>Comprehensive Travel Solutions for Your Journey</p>
    </section>

    <section className="section">
      <div className="container">
        <div className="services-grid">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} large={true} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
