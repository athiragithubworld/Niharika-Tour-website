import React from "react";
import { Star, Shield } from "lucide-react";

const AboutPage = () => (
  <div className="page-content">
    <section className="page-hero">
      <h1>About Niharika Tour and Travels</h1>
      <p>Your Trusted Travel Partner in South India</p>
    </section>

    <section className="section">
      <div className="container content-section">
        <div className="about-content">
          <h2>Welcome to Niharika Tour and Travels</h2>
          <p>
            We are a premium taxi and tour operator dedicated to providing
            exceptional travel experiences across Kerala and Kanyakumari,
            Tamil Nadu. With years of expertise in the tourism industry, we
            pride ourselves on delivering reliable, comfortable, and memorable
            journeys.
          </p>

          <div className="about-image-section">
            <img
              src="/about-kerala.jpg"
              alt="Kerala Backwaters"
              className="about-image"
            />
          </div>

          <h3>Our Service Areas</h3>
          <p>
            We cover all major destinations across Kerala including Munnar,
            Wayanad, Alleppey, Thekkady, Kovalam, and more. Our services
            extend to the beautiful Tamil Nadu region of Kanyakumari,
            Rameshwaram, Ooty, Kodaikanal, and other popular destinations.
          </p>

          <div className="about-images-grid">
            <img
              src="/about-hills.jpg"
              alt="Hill Stations"
              className="about-image"
            />
            <img
              src="/about-beach.jpg"
              alt="Beaches"
              className="about-image"
            />
          </div>

          <h3>Why Choose Us?</h3>
          <ul className="feature-list">
            <li>
              <Star className="inline" size={20} /> Experienced and
              professional drivers
            </li>
            <li>
              <Star className="inline" size={20} /> Well-maintained,
              comfortable vehicles
            </li>
            <li>
              <Star className="inline" size={20} /> Punctual and reliable
              service
            </li>
            <li>
              <Star className="inline" size={20} /> Competitive pricing with
              transparent rates
            </li>
            <li>
              <Star className="inline" size={20} /> 24/7 customer support
            </li>
            <li>
              <Star className="inline" size={20} /> Customized tour packages
            </li>
          </ul>

          <div className="defence-section">
            <Shield size={48} />
            <h3>Honoring Our Defence Personnel</h3>
            <p>
              As a token of our deepest respect and gratitude for the service
              of our Defence Personnel, we offer special discounts on all our
              services and tour packages. Your sacrifice for the nation
              deserves recognition, and we're honored to serve those who serve
              our country.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
