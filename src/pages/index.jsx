import * as React from 'react'
import Layout from '../components/layout'
// import Cadillacintro from '../components/c_intro.webm'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <video width="100%" muted="true" autoplay="true" loop="true" id="cadillacIntro">

    <source src="https://s1.webmshare.com/GeEBb.webm"
            type="video/webm"/>
    Sorry, your browser doesn't support embedded videos.
</video>

    </Layout>
  )
}
export default IndexPage