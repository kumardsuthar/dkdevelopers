import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Mail, Globe, Clock, Send } from "lucide-react";
import "../assets/css/contact.css";

function ContactSec() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("8Gk121rJGStogu-1J");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_orjltbf",
        "template_h8h9v4i",
        e.target,
        "8Gk121rJGStogu-1J"
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🚀");
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <Toaster position="top-right" />

      {/* Hero Header */}
      <section className="contact-head">
        <div className="container">
          <span className="badge">Get In Touch</span>
          <h1>Let's Start a <span>Conversation</span></h1>
          <p>
            Whether you have a specific project in mind or just want to explore possibilities, 
            we're here to help you navigate the digital landscape.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-layout">
            
            {/* Contact Information */}
            <div className="contact-info-panel">
              <div className="info-group">
                <div className="info-card">
                  <div className="info-icon"><Mail size={22} /></div>
                  <div className="info-text">
                    <h4>Email us</h4>
                    <a href="mailto:dkdev.help@gmail.com">dkdev.help@gmail.com</a>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon"><Globe size={22} /></div>
                  <div className="info-text">
                    <h4>Location</h4>
                    <p>India — Serving Worldwide</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon"><Clock size={22} /></div>
                  <div className="info-text">
                    <h4>Working Hours</h4>
                    <p>Mon – Sat: 10AM – 7PM IST</p>
                  </div>
                </div>
              </div>

              <div className="social-promo">
                <h3>Follow our journey</h3>
                <div className="social-links">
                  <a href="https://www.instagram.com/dkdevelopers_agency/" target="_blank" rel="noreferrer">Instagram</a>
                  <a href="#">Facebook</a>
                  <a href="#">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Form Area with Phone field included */}
            <div className="contact-form-panel">
              <div className="form-card">
                <div className="form-title">
                  <h2>Send a Message</h2>
                  <p>Tell us about your needs and we'll get back to you within 24 hours.</p>
                </div>

                <form ref={formRef} onSubmit={sendEmail} className="modern-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input type="text" id="name" name="name" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" name="phone" placeholder="+91 00000 00000" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      required
                      rows="5"
                    ></textarea>
                  </div>

                  <button type="submit" className="button-primary" disabled={loading}>
                    {loading ? "Sending..." : <>Send Message <Send size={18} /></>}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSec;
