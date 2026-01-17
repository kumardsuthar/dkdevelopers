import React from 'react'
import '../assets/css/contact.css'

function ContactSec() {
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

            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Phone Number" />
              <textarea placeholder="Tell us about your project"></textarea>

              <button type="submit">Submit</button>
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
    </>
  );
}


export default ContactSec
