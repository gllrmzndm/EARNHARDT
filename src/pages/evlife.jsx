import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Intro from '../assets/EVLIFE.webm'
import CadillacLogo2 from '../assets/c_logo_w.svg'
import NavLayout from '../components/navlayout'
import FooterLayout from '../components/footerlayout'
import MainLayout from '../components/mainlayout'

const IndexPage = () => {
  return (
    <div>
      <NavLayout pageTitle="EV LIFE">
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
        <section className="lg:grid grid-cols-2 font-Cadillac_Sans_A font-light">
          <section className="relative">
            <StaticImage src="../images/red_dress_ev_life.webp" alt="Image about the new Cadillac Lyriq with an orange background" width={1000} />
            <p className="absolute text-white tracking-widest text-xl inset-0 flex items-center justify-center">BE ORIGINAL</p>
          </section>

          <section className="relative font-Cadillac_Sans_A font-light">
            <StaticImage src="../images/red_dress_gradient.webp" alt="Image about the new Cadillac Lyriq with an orange background" width={1000} className="relative  " />
            <p className="absolute text-white inset-0 flex items-center justify-center my-40 lg:my-96 text-4xl">Boldness becomes you</p>
            <p className="absolute text-white inset-0 mt-72 text-sm flex items-center justify-center lg: text-base">POWER FOR THE BOLD</p>
          </section>
          {/* absolute z-10 text-white inset-0 flex items-center justify-center text-3xl border-solid border-white border-2 my-96 */}

          <section className="relative font-Cadillac_Sans_A font-light">
            <StaticImage src="../images/blue_gradient.webp" alt="Image about the new Cadillac Lyriq with an orange background" width={975} />
            <div className="absolute text-white inset-0 flex items-center justify-center my-40 scale-50 lg:my-96 text-4xl scale-75">
              <img src={CadillacLogo2} width="550px" />
            </div>
            <p className="absolute text-white text-2xl tracking-widest inset-0 mt-72 text-sm flex items-center justify-center lg:text-2readxl">BE ICONIC</p>
          </section>

          <section>
            <StaticImage src="../images/two_people_evlife.webp" alt="Image about the new Cadillac Lyriq with an orange background" width={975} />
          </section>

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