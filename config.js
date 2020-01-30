const config = {
  gatsby: {
    pathPrefix: '/element',
    siteUrl: 'https://github.com/volusion/element',
    gaTrackingId: null,
  },
  header: {
    logo:
      'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/favicon.png',
    logoLink: 'https://github.com/volusion/element',
    title: '<a href="/">Element</a>',
    githubUrl: 'https://github.com/volusion/element',
    helpUrl: '',
    tweetText: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: ['/introduction', '/explanations', '/how-to', '/references', '/tutorials'],
    collapsedNav: ['/explanations', '/how-to', '/references', '/tutorials'],
    links: [{ text: 'Volusion', link: 'https://www.volusion.com/' }],
    frontline: false,
    ignoreIndex: true,
  },
  siteMetadata: {
    title: 'Element Documentation | Volusion',
    description: 'Documentation built with mdx.',
    ogImage: null,
    docsLocation:
      'https://github.com/volusion/element',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Element Documentation | Volusion',
      short_name: 'VolusionElementDocs',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
}

module.exports = config
