module.exports = {
  siteMetadata: {
    title: "Kristin LeGard",
    subtitle: "Vegan Personal Trainer and Fitness Coach",
    description: "",
    author: "@KristinLeGard",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog-posts",
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "recipes",
        path: `${__dirname}/recipes`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-reading-time"],
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": ["Strict-Transport-Security: max-age=63072000"],
        }, // option to add more headers. 'Link' headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. 'Link' headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
