import { useEffect, useRef, useState } from "react";
import { steps } from "./step";
import "../assets/css/process.css";

export default function HowWeWork() {
  const refs = useRef([]);
  const [activeSteps, setActiveSteps] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setActiveSteps((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.4 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="how-section">
      <h2>How We <span>Work</span></h2>
      <p className="subtitle">
        A transparent process designed for clarity and results.
      </p>

      <div className="timeline">
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            data-index={i}
            className={`timeline-item ${
              activeSteps.includes(i) ? "active" : ""
            } ${i % 2 === 0 ? "left" : "right"}`}
          >
            <div className="dot">{i + 1}</div>

            <div className="card">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
