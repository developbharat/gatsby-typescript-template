import { GatsbyConfig } from "gatsby";

const core_plugins = [
  `gatsby-plugin-typescript`,
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  `gatsby-plugin-offline`,
];

module.exports = {
  siteMetadata: {
    title: `Develop Bharat Official Site`,
    description: `Official website for Develop Bharat community.`,
    author: `@devjayantmalik`,
  },
  plugins: [
    ...core_plugins,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `official-site-developbharat`,
        short_name: `developbharat`,
        start_url: `/`,
        background_color: `#eee`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
  ],
};

const config = {
  siteMetadata: {},
} as GatsbyConfig;

export default config;
