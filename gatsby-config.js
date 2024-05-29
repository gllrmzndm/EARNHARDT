module.exports = {
  siteMetadata: {
    title: `EARNHARDT`,
    siteUrl: `http://www.guillermojebentlekkeryeahiknowimhot.be`,
    pathPrefix: "https://thisisguillermo.github.io/EARNHARDT/",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `EARNHARDT`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-netlify`,
    "gatsby-plugin-mdx",
  ],
};
