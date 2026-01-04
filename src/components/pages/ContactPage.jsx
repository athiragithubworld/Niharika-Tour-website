import React from "react";
import { Phone, Mail, MapPin, Shield } from "lucide-react";
import { phoneNumber, email } from "../../constants/contactInfo";

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

export default ContactPage;
