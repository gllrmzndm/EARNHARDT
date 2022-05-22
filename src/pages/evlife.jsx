import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Intro from '../assets/EVLIFE.webm'
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

    // The intro video of the cadillac website.
    <div>
      <MainLayout>
        <section className="relative">
          <video className="" width="100%" muted="true" autoplay="true" loop="true">
            <source src={Intro} type="video/webm" />
          </video>
        </section>

        {/* Women with red dress on the left and red gradient on*/}
        <section className="relative">
          <StaticImage src="../images/red_dress_ev_life.webp" alt="Image about the new Cadillac Lyriq with an orange background" width={950} />

          <StaticImage src="../images/red_dress_gradient.webp" alt="Image about the new Cadillac Lyriq with an orange background" width={950} />
        </section>


        <section className="relative">
          <StaticImage src="../images/blue_gradient.webp" alt="Image about the new Cadillac Lyriq with an orange background" width={950} />

          <StaticImage src="../images/two_people_evlife.webp" alt="Image about the new Cadillac Lyriq with an orange background" width={950} />
        </section>

        {/* Interior of the Cadillac */}
        <section className="relative">
          <StaticImage src="../images/interior.webp" alt="Image about the new Cadillac Lyriq interior" />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 font-Cadillac_Sans_A font-light text-base text-white lg:text-3xl"> INTERIOR
            ENERGIZE YOUR SENSES</p>
        </section>
      </MainLayout>
    </div>
  )
}

// Footer of the website imported from FooterLayout.jsx

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