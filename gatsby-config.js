module.exports = {
  siteMetadata: {
    title: "Element - Volusion",
    author: "Volusion, LLC",
    description: "Building the next generation of Volusion storefronts"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui'
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
