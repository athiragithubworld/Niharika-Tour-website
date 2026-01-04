import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  MessageCircle,
  Shield,
  Car,
  Plane,
  Mountain,
  Sunrise,
  Users,
  Star,
  ChevronRight,
  Briefcase,
  Heart,
} from "lucide-react";

const NiharikaTourTravels = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = "+919633128984";
  const email = "Vinodkiranvk7905@gmail.com";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`;

  // Services data
  const services = [
    {
      title: "Taxi Services",
      icon: Car,
      desc: "Comfortable rides across Kerala & Tamil Nadu",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
    },
    {
      title: "Airport Transfers",
      icon: Plane,
      desc: "Reliable airport pickup & drop services",
      image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800",
    },
    {
      title: "Sabarimala Services",
      icon: Mountain,
      desc: "Dedicated pilgrimage taxi services",
      image: "/Sabarimala_Temple.jpg",
    },
    {
      title: "Custom Travel",
      icon: Users,
      desc: "Personalized tours tailored to you",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    },
    {
      title: "Corporate Travel Services",
      icon: Briefcase,
      desc: "Professional business travel solutions",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
    },
    {
      title: "Wedding Transportation",
      icon: Heart,
      desc: "Elegant transport for your special day",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    },
  ];

  // Kerala packages
  const keralaPackages = [
    {
      name: "Munnar",
      image: "/munnar.jpg",
    },
    {
      name: "Wayanad",
      image: "/wayanad.jpg",
    },
    {
      name: "Alleppey",
      image: "/alapuzha.jpg",
    },
    {
      name: "Thekkady",
      image: "/thekkady.jpg",
    },
    {
      name: "Eravikulam",
      image: "/eravikulam-new.jpg",
    },
    {
      name: "Vagamon",
      image: "/vagamon.jpg",
    },
    {
      name: "Varkala",
      image: "/varkala.jpg",
    },
    {
      name: "Kovalam",
      image: "/kovalam-new.jpg",
    },
    {
      name: "Athirappilly",
      image: "/athirapilly-new.jpg",
    },
  ];

  // Tamil Nadu packages
  const tamilnaduPackages = [
    {
      name: "Kanyakumari",
      image: "/kanyakumari.jpg",
    },
    {
      name: "Rameshwaram",
      image: "/rameshwaram-new.jpg",
    },
    {
      name: "Ooty",
      image: "/ooty.jpg",
    },
    {
      name: "Kodaikanal",
      image: "/kodaikanal.jpg",
    },
    {
      name: "Madurai",
      image: "/madurai.jpg",
    },
    {
      name: "Thanjavur",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
    },
  ];

  // Special packages
  const specialPackages = [
    {
      name: "Honeymoon & Romance Packages",
      image: "/honeymoon.jpg",
      special: true,
    },
    {
      name: "Ayurveda & Wellness Retreats",
      image: "/ayurveda.jpg",
      special: true,
    },
  ];

  const CTAButtons = () => (
    <div className="cta-buttons-container">
      <a href={`tel:${phoneNumber}`} className="cta-btn cta-primary">
        <Phone size={20} /> Call Now
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn cta-whatsapp"
      >
        <img
          src="/whatsapp1.png"
          alt="WhatsApp"
          style={{ width: "20px", height: "20px" }}
        />{" "}
        WhatsApp
      </a>
    </div>
  );

  const HomePage = () => {
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
                <div
                  key={idx}
                  className="service-card"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div
                    className="service-image"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className="service-content">
                    <service.icon size={40} className="service-icon" />
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <CTAButtons />
                  </div>
                </div>
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
                <div
                  key={idx}
                  className="package-card"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div
                    className="package-image"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  ></div>
                  <div className="package-info">
                    <h3>{pkg.name}</h3>
                    <button
                      className="contact-info-btn"
                      onClick={() => handlePackageClick(pkg.name)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
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

        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <X size={24} />
              </button>
              <h3>{selectedPackage}</h3>
              <p>
                For package price and complete details, please contact us via
                WhatsApp or Call.
              </p>
              <CTAButtons />
            </div>
          </div>
        )}
      </div>
    );
  };

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
              <div
                key={idx}
                className="service-card-large"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className="service-image-large"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="service-content">
                  <service.icon size={48} className="service-icon-large" />
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <CTAButtons />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

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
                <div
                  key={idx}
                  className="package-card"
                  onClick={() => handlePackageClick(pkg.name)}
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
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-gray">
          <div className="container">
            <h2 className="section-title">Tamil Nadu Packages</h2>
            <div className="packages-grid">
              {tamilnaduPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="package-card"
                  onClick={() => handlePackageClick(pkg.name)}
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
              ))}
            </div>
          </div>
        </section>

        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <X size={24} />
              </button>
              <h3>{selectedPackage}</h3>
              <p>
                For package price and complete details, please contact us via
                WhatsApp or Call.
              </p>
              <CTAButtons />
            </div>
          </div>
        )}
      </div>
    );
  };

  const ContactPage = () => (
    <div className="page-content">
      <section className="page-hero">
        <h1>Contact Us</h1>
        <p>Get in Touch for Your Next Adventure</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-section">
              <h2>Niharika Tour and Travels</h2>
              <p className="mb-6">
                We're here to help plan your perfect journey across Kerala and
                Tamil Nadu.
              </p>

              <div className="contact-item">
                <Phone size={24} />
                <div>
                  <h4>Phone / WhatsApp</h4>
                  <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                </div>
              </div>

              <div className="contact-item">
                <Mail size={24} />
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              </div>

              <div className="contact-item">
                <MapPin size={24} />
                <div>
                  <h4>Service Areas</h4>
                  <p>All of Kerala & Kanyakumari, Tamil Nadu</p>
                </div>
              </div>

              <div className="defence-reminder">
                <Shield size={32} />
                <p>
                  <strong>Defence Personnel:</strong> Don't forget to ask about
                  your special discount when you contact us!
                </p>
              </div>
            </div>

            <div className="contact-form-section">
              <h3>Send us a Message</h3>
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const name = formData.get("name");
                  const email = formData.get("email");
                  const phone = formData.get("phone");
                  const service = formData.get("service");
                  const message = formData.get("message");

                  // Create WhatsApp message
                  const whatsappMessage = `*New Contact Form Submission*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Service:* ${service}

*Message:*
${message}

---
Sent from Niharika Tours website`;

                  // Send to WhatsApp
                  const whatsappURL = `https://wa.me/${phoneNumber.replace(
                    /\+/g,
                    ""
                  )}?text=${encodeURIComponent(whatsappMessage)}`;
                  window.open(whatsappURL, "_blank");

                  // Show success message and reset form
                  alert(
                    "✅ WhatsApp opened! Please send the message to complete your inquiry."
                  );
                  e.target.reset();
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
                <select name="service" required>
                  <option value="">Select Service</option>
                  <option>Taxi Service</option>
                  <option>Airport Transfer</option>
                  <option>Tour Package</option>
                  <option>Sabarimala Service</option>
                  <option>Custom Travel</option>
                </select>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "packages":
        return <PackagesPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="website">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .website {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Defence Notification Bar */
        .defence-notification {
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          color: white;
          padding: 12px 0;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .defence-notification-content {
          display: flex;
          align-items: center;
          white-space: nowrap;
          animation: scroll 25s linear infinite;
          font-weight: 600;
          font-size: 14px;
        }

        .defence-notification-content span {
          padding: 0 50px;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Floating Badge */
        .floating-badge {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 11px;
          font-weight: bold;
          text-align: center;
          padding: 10px;
          cursor: pointer;
          z-index: 999;
          animation: pulse 2s ease-in-out infinite;
          box-shadow: 0 4px 20px rgba(255, 107, 53, 0.4);
          line-height: 1.2;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 4px 20px rgba(255, 107, 53, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 6px 30px rgba(255, 107, 53, 0.6);
          }
        }

        /* Navbar */
        .navbar {
          background: white;
          padding: 1rem 5%;
          position: fixed;
          top: 48px;
          left: 0;
          right: 0;
          z-index: 998;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          padding: 0.7rem 5%;
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #2c5f2d;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          cursor: pointer;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #2c5f2d;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #333;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 108px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }

          .nav-links.open {
            transform: translateX(0);
          }

          .menu-toggle {
            display: block;
          }

          .floating-badge {
            width: 70px;
            height: 70px;
            font-size: 10px;
            bottom: 20px;
            right: 20px;
          }
        }

        /* Page Content */
        .page-content {
          margin-top: 108px;
          flex: 1;
        }

        /* Hero Section - Static Video Background */
        .hero {
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #2c5f2d 0%, #4a7c59 100%); /* Fallback background */
        }

        /* Video background styling */
        .hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translateX(-50%) translateY(-50%);
          object-fit: cover;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.4);
          z-index: 2;
        }

        .hero-content {
          max-width: 800px;
          padding: 2rem;
          animation: fadeInUp 1s ease;
          position: relative;
          z-index: 3;
        }

        .hero-title {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 107, 53, 0.95);
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 2rem;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Page Hero */
        .page-hero {
          background: linear-gradient(135deg, #2c5f2d 0%, #4a7c59 100%);
          color: white;
          padding: 4rem 5%;
          text-align: center;
        }

        .page-hero h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .page-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        /* Sections */
        .section {
          padding: 4rem 5%;
        }

        .bg-gray {
          background: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 3rem;
          color: #2c5f2d;
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: stretch;
          width: 100%;
        }

        .service-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          animation: slideIn 0.6s ease forwards;
          opacity: 0;
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          max-width: none;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .service-image {
          height: 200px;
          background-size: cover;
          background-position: center;
        }

        .service-content {
          padding: 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
          min-height: 200px;
        }

        .service-icon {
          color: #2c5f2d;
          margin-bottom: 1rem;
          align-self: center;
        }

        .service-card h3 {
          margin-bottom: 1rem;
          color: #2c5f2d;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .service-card p {
          margin-bottom: 1.5rem;
          color: #666;
          flex: 1;
          line-height: 1.6;
        }

        .service-card-large {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          animation: slideIn 0.6s ease forwards;
          opacity: 0;
          position: relative;
        }

        .service-card-large:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .service-image-large {
          height: 250px;
          background-size: cover;
          background-position: center;
        }

        .service-content {
          padding: 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .service-icon-large {
          color: #2c5f2d;
          margin-bottom: 1rem;
          align-self: center;
        }

        .service-card-large h3 {
          margin: 1rem 0 0.5rem;
          color: #2c5f2d;
          font-size: 1.5rem;
        }

        .service-card-large p {
          margin-bottom: 1.5rem;
          color: #666;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Defence Badge on Cards */
        .defence-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 12px;
          font-weight: 600;
          box-shadow: 0 2px 10px rgba(255, 107, 53, 0.3);
        }

        .defence-badge.special {
          background: linear-gradient(135deg, #138808 0%, #2c5f2d 100%);
        }

        /* Packages Grid */
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        .package-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
          animation: slideIn 0.6s ease forwards;
          opacity: 0;
        }

        .package-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .package-card.special {
          border: 2px solid #ff6b35;
        }

        .package-image {
          height: 250px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .package-info {
          padding: 1.5rem;
          text-align: center;
        }

        .package-info h3 {
          color: #2c5f2d;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .contact-info-btn {
          background: #2c5f2d;
          color: white;
          border: none;
          padding: 0.7rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s;
        }

        .contact-info-btn:hover {
          background: #1a3d1b;
        }

        /* CTA Buttons */
        .cta-buttons-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.4rem;
          border-radius: 25px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .cta-primary {
          background: #2c5f2d;
          color: white;
        }

        .cta-primary:hover {
          background: #1a3d1b;
          transform: translateY(-2px);
        }

        .cta-whatsapp {
          background: #25D366;
          color: white;
        }

        .cta-whatsapp:hover {
          background: #128C7E;
          transform: translateY(-2px);
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001;
          padding: 1rem;
        }

        .modal {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          max-width: 500px;
          width: 100%;
          position: relative;
          animation: fadeInUp 0.3s ease;
        }

        .modal h3 {
          color: #2c5f2d;
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }

        .modal p {
          margin-bottom: 2rem;
          color: #666;
          line-height: 1.8;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
          transition: color 0.3s;
        }

        .modal-close:hover {
          color: #333;
        }

        /* About Page */
        .content-section {
          max-width: 900px;
          margin: 0 auto;
        }

        .about-content h2 {
          color: #2c5f2d;
          margin-bottom: 1rem;
          font-size: 2rem;
        }

        .about-content h3 {
          color: #2c5f2d;
          margin: 2rem 0 1rem;
          font-size: 1.5rem;
        }

        .about-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #555;
        }

        .feature-list {
          list-style: none;
          margin: 1.5rem 0;
        }

        .feature-list li {
          padding: 0.5rem 0;
          color: #555;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .defence-section {
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          color: white;
          padding: 2rem;
          border-radius: 12px;
          margin-top: 3rem;
          text-align: center;
        }

        .defence-section h3 {
          color: white;
          margin: 1rem 0;
        }

        .defence-section p {
          color: white;
          margin: 0;
        }

        /* About Page Images */
        .about-image-section {
          margin: 2rem 0;
          text-align: center;
        }

        .about-images-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin: 2rem 0;
        }

        .about-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .about-image:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .about-images-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .about-image {
            height: 200px;
          }
        }

        .info-box {
          background: #f8f9fa;
          border-left: 4px solid #ff6b35;
          padding: 2rem;
          margin-top: 3rem;
          border-radius: 8px;
          display: flex;
          gap: 1rem;
          align-items: start;
        }

        .info-box h3 {
          margin-bottom: 0.5rem;
          color: #2c5f2d;
        }

        .info-box p {
          margin: 0;
          color: #666;
        }

        /* Contact Page */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .contact-info-section h2 {
          color: #2c5f2d;
          margin-bottom: 1rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          margin: 2rem 0;
          align-items: start;
        }

        .contact-item h4 {
          color: #2c5f2d;
          margin-bottom: 0.3rem;
        }

        .contact-item a {
          color: #ff6b35;
          text-decoration: none;
          font-weight: 600;
        }

        .contact-item a:hover {
          text-decoration: underline;
        }

        .contact-item p {
          color: #666;
          margin: 0;
        }

        .defence-reminder {
          background: linear-gradient(135deg, #2c5f2d 0%, #4a7c59 100%);
          color: white;
          padding: 1.5rem;
          border-radius: 12px;
          margin-top: 2rem;
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .defence-reminder p {
          margin: 0;
        }

        .contact-form-section h3 {
          color: #2c5f2d;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          padding: 0.8rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #2c5f2d;
        }

        .submit-btn {
          background: #2c5f2d;
          color: white;
          padding: 1rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .submit-btn:hover {
          background: #1a3d1b;
        }

        /* Link Button */
        .link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #2c5f2d;
          font-weight: 600;
          background: none;
          border: 2px solid #2c5f2d;
          padding: 0.8rem 1.8rem;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .link-btn:hover {
          background: #2c5f2d;
          color: white;
        }

        /* Footer */
        .footer {
          background: #1a1a1a;
          color: white;
          padding: 2rem 5%;
          text-align: center;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-contact {
          margin-bottom: 1.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
        }

        .footer-contact a {
          color: #ff6b35;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer p {
          opacity: 0.8;
          margin-top: 1rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .services-grid,
          .packages-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
            margin: 0 auto;
          }

          .service-content {
            padding: 1.25rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .page-hero h1 {
            font-size: 2rem;
          }

          .hero {
            height: 500px;
          }

          .defence-notification-content {
            font-size: 12px;
          }
        }

        .inline {
          display: inline;
          vertical-align: middle;
          margin-right: 0.3rem;
        }

        .text-center {
          text-align: center;
        }

        .mt-8 {
          margin-top: 2rem;
        }

        .mb-6 {
          margin-bottom: 1.5rem;
        }
      `}</style>

      {/* Defence Notification Bar */}
      <div className="defence-notification">
        <div className="defence-notification-content">
          <span>
            Special Discount for Defence Personnel (Army, Navy, Air Force, Coast
            Guard, Police, BSF, CRPF & Security Forces) on all Services & Tour
            Packages – Contact us via WhatsApp
            <img
              src="/src/assets/images/whatsapp-icon.png"
              alt="WhatsApp"
              style={{
                width: "20px",
                height: "20px",
                verticalAlign: "middle",
                margin: "0 3px",
              }}
            />
            or Call +91 96331 28984
          </span>
          <span>
            Special Discount for Defence Personnel (Army, Navy, Air Force, Coast
            Guard, Police, BSF, CRPF & Security Forces) on all Services & Tour
            Packages – Contact us via WhatsApp
            <img
              src="/src/assets/images/whatsapp-icon.png"
              alt="WhatsApp"
              style={{
                width: "20px",
                height: "20px",
                verticalAlign: "middle",
                margin: "0 3px",
              }}
            />
            or Call +91 96331 28984
          </span>
          <span>
            Special Discount for Defence Personnel (Army, Navy, Air Force, Coast
            Guard, Police, BSF, CRPF & Security Forces) on all Services & Tour
            Packages – Contact us via WhatsApp
            <img
              src="/src/assets/images/whatsapp-icon.png"
              alt="WhatsApp"
              style={{
                width: "20px",
                height: "20px",
                verticalAlign: "middle",
                margin: "0 3px",
              }}
            />
            or Call +91 96331 28984
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="logo">Niharika Tours</div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <a
                onClick={() => {
                  setCurrentPage("home");
                  setMenuOpen(false);
                }}
                className={currentPage === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setCurrentPage("about");
                  setMenuOpen(false);
                }}
                className={currentPage === "about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setCurrentPage("services");
                  setMenuOpen(false);
                }}
                className={currentPage === "services" ? "active" : ""}
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setCurrentPage("packages");
                  setMenuOpen(false);
                }}
                className={currentPage === "packages" ? "active" : ""}
              >
                Packages
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setCurrentPage("contact");
                  setMenuOpen(false);
                }}
                className={currentPage === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Page Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3 style={{ marginBottom: "1rem", color: "#ff6b35" }}>
            Niharika Tour and Travels
          </h3>
          <div className="footer-contact">
            <a href={`tel:${phoneNumber}`}>
              <Phone size={18} /> {phoneNumber}
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href={`mailto:${email}`}>
              <Mail size={18} /> {email}
            </a>
          </div>
          <p style={{ borderTop: "1px solid #333", paddingTop: "1rem" }}>
            © 2025 Niharika Tour and Travels. All rights reserved. | Serving
            Kerala & Tamil Nadu
          </p>
          <p style={{ fontSize: "14px", marginTop: "0.5rem" }}>
            Special Discounts for Defence Personnel (Army, Navy, Air Force,
            Coast Guard, Police, BSF, CRPF & Security Forces)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NiharikaTourTravels;
