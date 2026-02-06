import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import '../assets/css/contact.css';

function ContactSec() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
  e.preventDefault();

  setLoading(true);

  emailjs
    .sendForm(
      "service_orjltbf",
      "template_h8h9v4i",
      formRef.current,
      "8Gk121rJGStogu-1J"
    )
    .then(
      () => {
        toast.success("Message sent successfully 🚀");
        setLoading(false);
        formRef.current.reset();
      },
      () => {
        toast.error("Failed to send message ❌ Please try again.");
        setLoading(false);
      }
    );
};


  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>
            Have a project in mind or need digital support?  
            Let’s talk and build something impactful together.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-grid">

          {/* FORM */}
          <div className="contact-form-card">
            <h2>Send a Message</h2>

            <form ref={formRef} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="text" name="phone" placeholder="Phone Number" />
              <textarea
                name="message"
                placeholder="Tell us about your project"
                required
              ></textarea>

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
              </button>

              {status && <p className="form-status">{status}</p>}
            </form>
          </div>

          {/* INFO GRID */}
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <h3>Address</h3>
              <p>India</p>
            </div>

            <div className="contact-info-card">
              <h3>Email</h3>
              <p>dkdevelopers@gmail.com</p>
            </div>

            <div className="contact-info-card">
              <h3>Phone</h3>
              <p>+91 9XXXXXXXXX</p>
            </div>

            <div className="contact-info-card">
              <h3>Working Hours</h3>
              <p>Mon – Sat, 10:00 AM – 7:00 PM</p>
            </div>
          </div>

        </div>
      </section>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>

    </>
  );
}

export default ContactSec;
