module.exports = {
  siteMetadata: {
    title: `HOMNERS Immobilier`,
    description: `Comment vendre rapidemment sa maison à Bordeaux.`,
    author: `@homners`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-datocms',
      options: { apiToken: 'c9e4af15fd364a7dd10d7f4446945a' }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HOMNERS Immobilier`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-homners.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
