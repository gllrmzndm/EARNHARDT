import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Intro from '../assets/EVLIFE.webm'
import CadillacLogo2 from '../assets/c_logo_w.svg'
import NavLayout from '../components/navlayout'
import FooterLayout from '../components/footerlayout'
import MainLayout from '../components/mainlayout'

import { useStaticQuery, graphql } from 'gatsby'


const MainL = ({ data }) => {
  return (
    // The intro video of the cadillac website.
    <div>
      <section className="relative text-black">
        <StaticImage src="../images/red_dress_gradient.webp" alt="Image about the new Cadillac Lyriq with an orange background" width={1000} className="relative  " />
        <p className="absolute text-black inset-0 flex items-center justify-center my-40 lg:my-96 text-4xl">Boldness becomes you</p>
        <p className="absolute text-black inset-0 mt-72 text-sm flex items-center justify-center lg: text-base">POWER FOR THE BOLD</p>
        <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
      </section>
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


const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allFile {
      nodes {
        name
      }
    }
  }
`



export default function StartEngine() {
  return (
    <div>
      <MainL />
      <FootL />
      <ComponentName />
    </div>
  )
}