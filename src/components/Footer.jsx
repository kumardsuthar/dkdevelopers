import "../assets/css/footer.css";
import logoUrl from "../assets/media/White_logo_DK.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* BRAND */}
        <div className="footer-brand">
         <img src={logoUrl} alt="Dk Developers"/>
          <p>
            Building modern websites and digital marketing solutions that help
            businesses grow online.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Company</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
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
          <p>Email: hello@dk.dev</p>
          <p>Phone: +91 9XXXXXXXXX</p>
          <p>Location: India</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dk.dev. All rights reserved.</p>
      </div>
    </footer>
  );
}
