import path from 'path'
import { fileURLToPath } from 'url'
import startCase from 'lodash.startcase'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const template = path.resolve('./src/templates/docs.js');

export const createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  fields {
                    id
                  }
                  tableOfContents
                  fields {
                    slug
                  }
                  internal {
                    contentFilePath
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors) // eslint-disable-line no-console
          reject(result.errors)
        }

        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug ? node.fields.slug : '/',
            component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
            context: {
              id: node.fields.id,
            },
          })
        })
      })
    )
  })
}

export const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        $components: path.resolve(__dirname, 'src/components'),
        buble: '@philpl/buble', // to reduce bundle size
      },
    },
  })
}

export const onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from',
  })
}

export const onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)
    let value = parent.relativePath.replace(parent.ext, '')

    if (value === 'index') {
      value = ''
    }

    createNodeField({
      name: `slug`,
      node,
      value: `/${value}`,
    })

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    })

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title || startCase(parent.name),
    })
  }
}
