module.exports = {
  siteMetadata: {
    title: `Fargo Tbakhi`,
    description: `Poet & Performance Artist`,
    twitter: `@youknowfargo`,
    email: `fargotbakhi@gmail.com`,
    author: `Fargo Tbakhi`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fargo tbakhi`,
        short_name: `fargo`,
        start_url: `/`
        // background_color: `#663399`,
        // theme_color: `#663399`,
        // display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
