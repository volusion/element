# Element Pages

### Develop

- Run `npm run develop` in the terminal to start the dev site.
- Run `npm run build` to generate the static files in the `public/` directory.
- Run `npm run serve` to view the built files. _cannot be running `npm run develop` at the same time_

Visit `http://localhost:8000/` to view the app.

### Deploy

Be sure to have `gatsby-cli` installed.

Run `npm run deploy`. This builds the files and pushes them to the `gh-pages` branch for automagical deployment.

## 🔧 Configure

Write markdown files in `content` folder.

Open `config.js` for templating variables. Broadly configuration is available for `gatsby`, `header`, `sidebar` and `siteMetadata`.

- `gatsby` config for global configuration like

  - `pathPrefix` - Gatsby Path Prefix
  - `siteUrl` - Gatsby Site URL
  - `gaTrackingId` - Google Analytics Tracking ID

- `header` config for site header configuration like

  - `title` - The title that appears on the top left
  - `githubUrl` - The Github URL for the docs website
  - `helpUrl` - Help URL for pointing to resources
  - `tweetText` - Tweet text
  - `links` - Links on the top right
  - `search` - Enable search and [configure Algolia](https://www.gatsbyjs.org/docs/adding-search-with-algolia/)

- `sidebar` config for navigation links configuration

  - `forcedNavOrder` for left sidebar navigation order. It should be in the format "/<filename>"
  - `frontLine` - whether to show a front line at the beginning of a nested menu.(Collapsing capability would be turned of if this option is set to true)
  - `links` - Links on the bottom left of the sidebar
  - `ignoreIndex` - Set this to true if the index.md file shouldn't appear on the left sidebar navigation. Typically this can be used for landing pages.

- `siteMetadata` config for website related configuration

  - `title` - Title of the website
  - `description` - Description of the website
  - `ogImage` - Social Media share og:image tag
  - `docsLocation` - The Github URL for Edit on Github

- For sub nesting in left sidebar, create a folder with the same name as the top level `.md` filename and the sub navigation is auto-generated. The sub navigation is alphabetically ordered.

### Algolia Configuration

To setup Algolia, go to `config.js` and update the `search` object to look like the one below:

```...,
	"search": {
		"enabled": true,
		"indexName": "MY_INDEX_NAME",
		"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
		"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
		"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
	},
```

Values for Algolia App ID, Search Key, and Admin Key can be obtained from Algolia Dashboard with the right set of permissions. Replace `MY_INDEX_NAME` with the Algolia Index name of your choice. To build the Algolia index, you need to run `npm run build` which will do a gatsby build along with content indexing in Algolia.

### Progressive Web App, Offline

To enable PWA, go to `config.js` and update the `pwa` object to look like the one below:

```
   "pwa": {
        "enabled": false, // disabling this will also remove the existing service worker.
        "manifest": {
            "name": "Gatsby Gitbook Starter",
            "short_name": "GitbookStarter",
            "start_url": "/",
            "background_color": "#6b37bf",
            "theme_color": "#6b37bf",
            "display": "standalone",
            "crossOrigin": "use-credentials",
            icons: [
                {
                    src: "src/pwa-512.png",
                    sizes: `512x512`,
                    type: `image/png`,
                },
            ],
        },
    }
```

## Live Code Editor

To render react components for live editing, add the `react-live=true` to the code section. For example:

```javascript react-live=true
<button>Edit my text</button>
```

In the above code, just add `javascript react-live=true` after the triple quote ``` to start rendering react components that can be edited by users.

## 🤖 SEO friendly

This is a static site and comes with all the SEO benefits. Configure meta tags like title and description for each markdown file using MDX Frontmatter

```markdown
---
title: 'Title of the page'
metaTitle: 'Meta Title Tag for this page'
metaDescription: 'Meta Description Tag for this page'
---
```

Canonical URLs are generated automatically.

_based on the starter from [here](https://www.gatsbyjs.org/starters/hasura/gatsby-gitbook-starter/)_
