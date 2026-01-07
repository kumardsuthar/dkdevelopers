import "../assets/css/pricing.css";

const plans = [
  {
    title: "Website Starter",
    price: "₹9,999",
    subtitle: "Perfect for small businesses",
    features: [
      "1–5 Pages Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Free Domain & Hosting (1 Year)",
      "Contact Form Integration",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    title: "Business Website",
    price: "₹15,999",
    subtitle: "Best for growing businesses",
    features: [
      "5–10 Pages Website",
      "Custom UI/UX Design",
      "Advanced SEO Setup",
      "Free Domain & Hosting (1 Year)",
      "WhatsApp & Lead Integration",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    title: "Digital Marketing",
    price: "Custom",
    subtitle: "For brands focused on growth",
    features: [
      "SEO & Content Strategy",
      "Social Media Marketing",
      "Google & Meta Ads",
      "Monthly Performance Reports",
      "Dedicated Support",
    ],
    cta: "Talk to Expert",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2>Pricing <span>Plans</span></h2>
        <p>
          Transparent pricing designed to fit different business needs and
          growth stages.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${
              plan.highlight ? "highlight" : ""
            }`}
          >
            {plan.highlight && (
              <span className="pricing-badge">Recommended</span>
            )}

            <h3>{plan.title}</h3>
            <p className="pricing-subtitle">{plan.subtitle}</p>

            <div className="pricing-price">{plan.price}</div>

            <ul className="pricing-features">
              {plan.features.map((item, i) => (
                <li key={i}>✓ {item}</li>
              ))}
            </ul>

            <button className="pricing-btn">{plan.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
