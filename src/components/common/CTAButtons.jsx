import React from "react";
import { Phone } from "lucide-react";
import { phoneNumber, whatsappLink } from "../../constants/contactInfo";

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

export default CTAButtons;
