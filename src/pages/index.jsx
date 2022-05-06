import * as React from 'react'
import Layout from '../components/layout'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <video width="100%" muted="true" autoplay="true" loop="true" id="cadillacIntro">

        <source src="https://s1.webmshare.com/O96zW.webm"
          type="video/webm" />
        <p>Sorry, your browser doesn't support embedded videos.</p>
      </video>

    </Layout>
  )
}
export default IndexPage