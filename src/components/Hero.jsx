import React from 'react'
import '../assets/css/hero.css'
import img01 from '../assets/media/nodejs.png'
import img02 from '../assets/media/react.png'

function Hero() {
  return (
    <div className='heroSection'>
      <div className="heroicon01">
        <img src={img01} alt="Node js"/>
      </div>
      <div className="heroicon02">
        <img src={img02} alt="React"/>
      </div>
       <div>
            <h1>
        We design and build <br /> <span>Digital Experiences</span>
       </h1>
       <h4>
        A creative digital studio crafting high-performance websites
and brand experiences for growing businesses.
       </h4>
       <div className="herosection-btn">
        <button>Learn More</button>
        <button>Contact Us</button>
       </div>
       </div>
    </div>
  )
}

export default Hero
