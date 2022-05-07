module.exports = {
  siteMetadata: {
    title: `EARNHARDT`,
    siteUrl: `http://www.guillermojebentlekkeryeahiknowimhot.be`,
    pathPrefix: "https://thisisguillermo.github.io/EARNHARDT/",
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    }
  ],
}
