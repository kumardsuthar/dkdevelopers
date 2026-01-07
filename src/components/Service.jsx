import "../assets/css/service.css";

const services = [
  {
    title: "Website Development",
    desc: "Fast, secure, and scalable websites built for performance and SEO.",
  },
  {
    title: "UI / UX Design",
    desc: "Clean and intuitive designs that improve user experience.",
  },
  {
    title: "Branding & Identity",
    desc: "Strong visual identity that makes your brand stand out.",
  },
  {
    title: "SEO Optimization",
    desc: "Improve visibility, rankings, and organic traffic growth.",
  },
  {
    title: "Social Media Marketing",
    desc: "Engage the right audience and grow your online presence.",
  },
  {
    title: "Paid Ads & Campaigns",
    desc: "ROI-focused campaigns across Google and social platforms.",
  },
];

export default function Service() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our <span>Services</span></h2>
        <p>
          Digital solutions designed to help your business grow online.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
