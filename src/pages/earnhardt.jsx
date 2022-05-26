import * as React from 'react'
import { graphql } from 'gatsby'
import ReactPlayer from 'react-player'

import NavLayout from '../components/navlayout'
import FooterLayout from '../components/footerlayout'
import MainLayout from '../components/mainlayout'
const MainL = ({ data }) => {
  return (
    <div className="flex flex-col">

      <div>
        <NavLayout></NavLayout>
      </div>

      {/* Video player */}
      <div className="player-wrapper pointer-events-none w-screen h-screen border-4 border-orange-200">
        <ReactPlayer className='object-fill box-border' playing='true' muted='true' loop='true' playsinline='true' width="100%"
          height="100%" url='https://youtu.be/MUU0BjJjAvk' />
      </div>

      <div className="w-screen">
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

    </div >
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