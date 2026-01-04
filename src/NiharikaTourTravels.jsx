import React, { useState, useEffect } from "react";
import DefenceNotification from "./components/layout/DefenceNotification";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import PackagesPage from "./components/pages/PackagesPage";
import ContactPage from "./components/pages/ContactPage";
import "./styles/styles.css";

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

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "packages":
        return <PackagesPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="website">
      <DefenceNotification />
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrolled={scrolled}
      />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default NiharikaTourTravels;
