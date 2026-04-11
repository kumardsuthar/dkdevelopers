import "../assets/css/footer.css";
import logoUrl from "../assets/media/White_logo_DK.png";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* BRAND */}
        <div className="footer-brand">
          <img src={logoUrl} alt="Dk Developers" />
          <p>
            Building modern websites and digital marketing solutions that help
            businesses grow and succeed in the digital world.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/dkdevelopers_agency/" target="_blank" rel="noreferrer">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Company</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/work">Work</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <a href="#">Web Development</a>
          <a href="#">Digital Marketing</a>
          <a href="#">SEO Optimization</a>
          <a href="#">Branding</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <div className="contact-item">
            <Mail size={16} />
            <a href="mailto:dkdev.help@gmail.com">dkdev.help@gmail.com</a>
          </div>
          <div className="contact-item">
            <MapPin size={16} />
            <p>India</p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dk.dev. All rights reserved.</p>
      </div>
    </footer>
  );
}
