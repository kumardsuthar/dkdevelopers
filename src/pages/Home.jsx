import React from 'react'
import Hero from '../components/Hero'
import CurveText from '../Reactbits/CurvedLoop/CurvedLoop'
import WhoWeAre from '../components/WhoWeAre'
import Service from '../components/Service'
import HowWeWork from '../components/HowWeWork'
import ScrollStack from '../components/ScrollStack'
import CallToAction from '../components/CallToAction'
import Pricing from '../components/Pricing'
import Clients from '../components/ClientData'
import { WhyUs } from '../components/WhyUs'

function Home() {
  return (
    <>
       <Hero/>
    {/* <CurveText/> */}
    <WhoWeAre/>
    <Service/>
    <WhyUs/>
     <HowWeWork/>
     <ScrollStack/>
     <Pricing/>
     <Clients/>
     <CallToAction/>
    </>
  )
}

export default Home
