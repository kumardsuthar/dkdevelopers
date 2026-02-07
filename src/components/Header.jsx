import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";
import logoUrl from "../assets/media/White_logo_DK.png"
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          {/* LOGO */}
          <div className="logo">
            <img src={logoUrl} alt="Dk Developers Agency" />
          </div>

          {/* DESKTOP NAV */}
          <nav className="nav-desktop">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/budget-planner">Budget Planner</Link>
          </nav>

          {/* CTA */}
          <button className="header-cta">Start Project</button>

          {/* MOBILE TOGGLE */}
          <div
            className={`menu-toggle ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
<div className={`mobile-menu ${open ? "show" : ""}`}>
  <nav>
    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
    <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
    <Link to="/work" onClick={() => setOpen(false)}>Work</Link>
    <Link to="/about" onClick={() => setOpen(false)}>About</Link>
    <Link to="/budget-planner" onClick={() => setOpen(false)}>Budget Planner</Link>
    <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
  </nav>

  <button className="mobile-cta">Get Free Consultation</button>
</div>

    </>
  );
}
