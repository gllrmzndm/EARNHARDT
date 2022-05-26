import * as React from 'react'
import { graphql } from 'gatsby'
import ReactPlayer from 'react-player'

import NavLayout from '../components/navlayout'
import FooterLayout from '../components/footerlayout'


const MainL = ({ data }) => {
  return (
    <body className="flex flex-col box-border overflow-x-hidden">

      <div>
        <NavLayout></NavLayout>
      </div>

      {/* Video player */}
      <div className="player-wrapper pointer-events-none h-64 lg:pointer-events-none w-screen h-screen">
        <ReactPlayer className='object-fill' playing='true' muted='true' loop='true' playsinline='true' width="100%"
          height="100%" url='https://youtu.be/MUU0BjJjAvk' />
      </div>

      <div className="">
        <ul className="text-center bg-orange-500">
          {
            data.allFile.nodes.map(node => (
              <li key={node.name}>
                {node.name}
              </li>
            ))
          }
        </ul>
      </div>

    </body>
  )
}
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
export default MainL