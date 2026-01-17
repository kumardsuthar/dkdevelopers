import "../assets/css/servicePage.css";

export default function ServicePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>
            We provide end-to-end web development and digital marketing services
            designed to help brands grow, perform, and scale in the digital
            world. From strategy to execution, everything we build is focused
            on real results.
          </p>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Talk on WhatsApp
          </a>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid-section">
        <div className="services-grid">
          <div className="service-card bg-1">
            <h3>Website Design</h3>
            <p>
              Modern, responsive, and conversion-focused website designs that
              reflect your brand identity.
            </p>
          </div>

          <div className="service-card bg-2">
            <h3>Web Development</h3>
            <p>
              Fast, scalable, and secure websites built using modern web
              technologies.
            </p>
          </div>

          <div className="service-card bg-3">
            <h3>E-Commerce Solutions</h3>
            <p>
              High-performance online stores designed to maximize sales and
              customer experience.
            </p>
          </div>

          <div className="service-card bg-4">
            <h3>SEO Optimization</h3>
            <p>
              Search-engine-optimized websites that improve visibility and
              organic traffic.
            </p>
          </div>

          <div className="service-card bg-5">
            <h3>Digital Marketing</h3>
            <p>
              Data-driven marketing strategies focused on leads, growth, and
              conversions.
            </p>
          </div>

          <div className="service-card bg-6">
            <h3>Social Media Marketing</h3>
            <p>
              Targeted campaigns that help brands connect with the right
              audience.
            </p>
          </div>

          <div className="service-card bg-7">
            <h3>UI/UX Design</h3>
            <p>
              User-focused designs that improve usability, engagement, and
              retention.
            </p>
          </div>

          <div className="service-card bg-8">
            <h3>Website Maintenance</h3>
            <p>
              Ongoing support, updates, and performance monitoring to keep your
              site running smoothly.
            </p>
          </div>

          <div className="service-card bg-9">
            <h3>Custom Solutions</h3>
            <p>
              Tailored digital solutions built specifically for your business
              needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
