import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import Intro from '../assets/intro.webm'


const IndexPage = () => {
  return (
    <Layout pageTitle="Cadillac">
      <video width="100%" muted="true" autoplay="true" loop="true">
        <source src={Intro} type="video/webm" />
      </video>
      <StaticImage src="../images/2023-LYRIQ-ext-banner_orange.jpg" alt="Cadillac Lyriq"/>
      <p>whatever</p>
    </Layout>
  )
}

export default IndexPage