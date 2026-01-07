import { useState } from "react";
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
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/work">Work</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
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
          <a onClick={() => setOpen(false)} href="/">Home</a>
          <a onClick={() => setOpen(false)} href="/services">Services</a>
          <a onClick={() => setOpen(false)} href="/work">Work</a>
          <a onClick={() => setOpen(false)} href="/about">About</a>
          <a onClick={() => setOpen(false)} href="/contact">Contact</a>
        </nav>

        <button className="mobile-cta">Get Free Consultation</button>
      </div>
    </>
  );
}
