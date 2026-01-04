import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { phoneNumber, email, whatsappLink } from "../../constants/contactInfo";

const Footer = () => (
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
);

export default Footer;
