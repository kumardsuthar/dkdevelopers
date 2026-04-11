import React from "react";
import CareersGrid from "../components/CareersGrid";

export default function Careers() {
  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="container">
          <h1>Join Our <span>Creative Team</span></h1>
          <p>
            Help us build the next generation of digital experiences. 
            We're looking for passionate individuals to join Dk Developers.
          </p>
        </div>
      </section>

      <CareersGrid />

      <section className="careers-footer">
        <div className="container">
          <h2>Don't see a perfect fit?</h2>
          <p>Send your resume to <a style={{color:"#fff"}} href="mailto:dkdev.help@gmail.com">dkdev.help@gmail.com</a> and we'll keep you in mind!</p>
        </div>
      </section>
    </div>
  );
}
