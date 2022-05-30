import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import NavLayout from '../../components/navlayout'
import FooterLayout from '../../components/footerlayout'


const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <div className="">
      <NavLayout pageTitle={data.mdx.frontmatter.title} />

      <div>
        <GatsbyImage className="w-full max-h-96"
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
        <div className="mx-8 lg:mx-40">
          <p className="my-4">{data.mdx.frontmatter.date}</p>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </div>
      </div>
      <FooterLayout />
    </div>
  )
}
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "DD-MM-YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`
export default BlogPost
