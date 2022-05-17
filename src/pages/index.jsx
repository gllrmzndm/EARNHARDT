import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Intro from '../assets/intro.webm'
import NavLayout from '../components/navlayout'
import FooterLayout from '../components/footerlayout'
import MainLayout from '../components/mainlayout'



const IndexPage = () => {
  return (
    <div>
      <NavLayout pageTitle="Cadillac">
      </NavLayout>
    </div>
  )
}



const MainL = () => {
  return (
    <div>
    <MainLayout>
    <section className="relative">
      <video width="100%" muted="true" autoplay="true" loop="true">
        <source src={Intro} type="video/webm" />
      </video>
      <div className="absolute bg-black bg-opacity-10 inset-0 flex items-center justify-center">
      <p className="mt-60 text-xs text-gray-300">When you approach or leave your LYRIQ, the vehicle performs an intricately choreographed lighting display across the front and rear of the vehicle. Even on the road, LYRIQ’s uniquely crafted headlamps shine like nothing else.</p>
      </div>
      </section>
      <section className="relative">
      <StaticImage src="../images/UHD_2023-LYRIQ_banner_orange.jpg" alt="Image about the new Cadillac Lyriq with an orange background" />
      <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-xl text-white">RADIANCE THAT MOVES YOU FORWARD</p>
      </section>
    </MainLayout>
    </div>
  )
}

const FootL = () => {
  return (
    <FooterLayout>

    </FooterLayout>
  )
}



export default function StartEngine() {
  return (
    <div>
      <IndexPage />
      <MainL />
      <FootL />
    </div>
  )
}