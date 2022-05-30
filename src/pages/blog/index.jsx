import * as React from 'react'
import { Link, graphql } from 'gatsby'
import ReactPlayer from 'react-player/youtube'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import NavLayout from '../../components/navlayout'
import FooterLayout from '../../components/footerlayout'


const MainL = ({ data }) => {
  return (
    <body className="flex flex-col box-border overflow-x-hidden  bg-white">

      <div>
        <NavLayout pageTitle="EARNHARDT"></NavLayout>
      </div>

      {/* Video player */}
      <div className="player-wrapper pointer-events-none w-full aspect-video">
        <ReactPlayer className='object-cover' playing='true' muted='true' loop='true' playsinline='true' width="100%"
          height="100%" frameborder="0" url='https://youtu.be/RVB08vZ5br8' />
      </div>

      <div className="">
        <ul className="text-center bg-white text-black font-Cadillac_Sans_A font-light  ">
          {
            data.allMdx.nodes.map((node) => (
              <article className="border-2 border-gray-900 text-left my-10" key={node.id}>
                <div className="my-10 ">


                  {/* Frontmatter title */}
                  <h2 className="text-2xl font-Cadillac_Sans_A font-bold">
                    <Link to={`/blog/${node.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                  </h2>


                  {/* Frontmatter date */}
                  <p className="font-Cadillac_Sans_A font-semibold">Posted: {node.frontmatter.date}</p>

                  {/* Frontmatter excerpt */}
                  <p>{node.excerpt}</p>

                  {/* This render the full body, which isn't needed on the page. */}
                  {/* <MDXRenderer>
                  {node.body}
                </MDXRenderer> */}
                </div>
              </article>
            ))
          }
        </ul>
      </div>
      <div>
        <FooterLayout></FooterLayout>
      </div>
    </body>
  )
}
export const query = graphql`
query Posts {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        date(formatString: "DD-MM-YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
      body
      slug
      excerpt(pruneLength: 167, truncate: true)
    }
  }
}
`
export default MainL