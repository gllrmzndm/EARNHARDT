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
          <div className="absolute bg-black bg-opacity-30 inset-0 flex items-center justify-center">
            <p className="mt-40 sm:mt-80 text-xl font-Cadillac_Sans_A font-light text-gray-300 tracking-widest">SIMPLE AND SEAMLESS</p>
          </div>
        </section>
        <section className="relative">
          <StaticImage src="../images/UHD_2023-LYRIQ_banner_orange.jpg" alt="Image about the new Cadillac Lyriq with an orange background" />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 font-Cadillac_Sans_A font-light text-lg text-white lg:text-2xl">RADIANCE THAT MOVES YOU FORWARD</p>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="mt-40 text-xs sm:mt-80 text-xl font-Cadillac_Sans_A font-light text-white tracking-widest lg:text-xl">A HIGHER STANDARD OF INTEGRATION</p>
          </div>
        </section>
        <section className="relative bg-black text-white justify-center sm:flex">
          <div className="relative sm:mb-16">
            <StaticImage src="../assets/home_charging.svg" alt="uhhu" width={500} className="scale-50 sm:scale-100" />
            <p className="absolute inset-0 flex items-center justify-center font-Cadillac_Sans_A font-light text-base text-white mt-40 sm:mt-72">190 kW ACCEPTANCE RATE (MAX CHARGING SPEED)</p>
          </div>
          <div className="relative sm:mb-16">
            <StaticImage src="../assets/pub_charging.svg" alt="uhhu" width={500} className="scale-50 sm:scale-100" />
            <p className="absolute inset-0 flex items-center justify-center font-Cadillac_Sans_A font-light text-base text-white mt-40 sm:mt-72">19.2 kW PUBLIC* OR HOME* CHARGER</p>
          </div>
        </section>
        <section className="relative">
          <StaticImage src="../images/interior.jpg" alt="Image about the new Cadillac Lyriq with an orange background" />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 font-Cadillac_Sans_A font-light text-base text-white lg:text-3xl"> INTERIOR
ENERGIZE YOUR SENSES</p>
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