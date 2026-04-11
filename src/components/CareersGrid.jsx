import React from "react";
import "../assets/css/careers.css";
import { SearchX, Mail } from "lucide-react";

export default function CareersGrid() {
  const jobs = []; // Empty array to trigger the "No jobs now" section

  return (
    <section className="careers-section">
      <div className="container">
        {jobs.length > 0 ? (
          <div className="careers-grid">
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                {/* ... existing job rendering ... */}
              </div>
            ))}
          </div>
        ) : (
          <div className="no-jobs-container">
            <div className="no-jobs-card">
              <div className="no-jobs-icon">
                <SearchX size={64} />
              </div>
              <h2>No Openings Currently</h2>
              <p>
                We aren't hiring for any specific roles at the moment, but we're always 
                looking for exceptional talent to join our network.
              </p>
              <div className="no-jobs-action">
                <p>Think you’d be a great fit? Send your CV to:</p>
                <a href="mailto:dkdev.help@gmail.com" className="email-link">
                  <Mail size={18} /> dkdev.help@gmail.com
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
