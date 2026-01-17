import React from 'react'
import '../assets/css/hero.css'
import img01 from '../assets/media/Website-Banner-nobg.svg'
function WhoWeAre() {
  return (
    <div className='who-we-are'>
        <div className="who-we-are-img">
           <img src={img01} alt="logo" />
        </div>
      <h2>Who We Are </h2>
      <h4>digital-first team focused on building visibility, engagement, and growth.</h4>
      <p>We are a web and digital marketing studio helping brands connect with the right
audience. From designing high-impact websites to running targeted marketing
campaigns, we focus on results that matter.</p>
<button>Learn More</button>
    </div>
  )
}

export default WhoWeAre
