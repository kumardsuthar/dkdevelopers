import React from "react";
import { motion } from "motion/react";
import { Search, Layout, Palette, Code2, Rocket } from "lucide-react";
import { steps } from "./step";
import "../assets/css/process.css";

const icons = [
  <Search size={28} />,
  <Layout size={28} />,
  <Palette size={28} />,
  <Code2 size={28} />,
  <Rocket size={28} />,
];

export default function HowWeWork() {
  return (
    <section className="how-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="header-area"
      >
        <div className="badge-text">Execution Excellence</div>
        <h2>
          Our Proven <span>Process</span>
        </h2>
        <p className="subtitle">
          We combine strategy, design, and technology to deliver exceptional
          digital products that drive business growth.
        </p>
      </motion.div>

      <div className="bento-grid">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`bento-item item-${i}`}
          >
            <div className="step-meta">
              <span className="step-index">0{i + 1}</span>
              <div className="icon-wrapper">{icons[i]}</div>
            </div>

            <div className="step-info">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
            
            {/* Visual background element for flavor */}
            <div className="card-decoration"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
