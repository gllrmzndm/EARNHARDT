import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <video width="100%" muted={true} autoPlay={true} loop={true} id="cadillacIntro">

        <source src="https://www.alfaromeo.com/NS_Video_Content_AR/COM/Alfa_NLE_giulia_grigia_15sec_16-9%20-%20NO%20PROMO%20WEB_3.mp4"
          type="video/webm" />
        <p>Sorry, your browser doesn't support embedded videos.</p>
      </video>

    </Layout>
  )
}
export default IndexPage