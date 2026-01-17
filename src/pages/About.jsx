import React from 'react'
import AboutHero from '../components/AboutHero'
import WhoWeAreAbout from '../components/WhoWeAreAbout'
import { OurMission } from '../components/OurMission'
import { OurExpertise } from '../components/OurExpertise'
import { WhyUs } from '../components/WhyUs'
import CallToAction from '../components/CallToAction'


function About() {
  return (
    <>
    <AboutHero/>
    <WhoWeAreAbout/>
    <OurMission/>

    <WhyUs/>
        <OurExpertise/>
        <CallToAction/>
    </>
  )
}

export default About
