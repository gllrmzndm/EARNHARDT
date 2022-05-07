import * as React from 'react'
import Layout from '../components/layout'


const IndexPage = () => {
  return (
    <Layout pageTitle="Cadillac">
      <video width="100%" muted="true" autoplay="true" loop="true" id="cadillacIntro">

        <source src="https://s1.webmshare.com/1yjRz.webm"
          type="video/webm" />
        <p>Sorry, your browser doesn't support embedded videos.</p>
      </video>
      <p>test</p>
    </Layout>
  )
}
export default IndexPage