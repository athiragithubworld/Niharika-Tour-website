import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ currentPage, setCurrentPage, menuOpen, setMenuOpen, scrolled }) => {
  const navItems = [
    { name: "home", label: "Home" },
    { name: "about", label: "About" },
    { name: "services", label: "Services" },
    { name: "packages", label: "Packages" },
    { name: "contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">Niharika Tours</div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                onClick={() => {
                  setCurrentPage(item.name);
                  setMenuOpen(false);
                }}
                className={currentPage === item.name ? "active" : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
