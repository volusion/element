import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Link } from '$components'
import NextPrevious from '../components/NextPrevious'
import '../components/styles.css'
import config from '../../config.mjs'

const forcedNavOrder = config.sidebar.forcedNavOrder

const Edit = styled('div')`
  padding: 1rem 1.5rem;
  text-align: right;

  a {
    font-size: 14px;
    font-weight: 500;
    line-height: 1em;
    text-decoration: none;
    color: #555;
    border: 1px solid rgb(211, 220, 228);
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.2s ease-out 0s;
    text-decoration: none;
    color: rgb(36, 42, 49);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    height: 30px;
    padding: 5px 16px;
    &:hover {
      background-color: rgb(245, 247, 249);
    }
  }
`

export default class MDXRuntimeTest extends Component {
  render() {
    const { data, children } = this.props
    if (!data) {
      return null
    }
    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: { docsLocation, title },
      },
    } = data
    const gitHub = require('../components/images/github.svg').default

    const navItems = allMdx.edges
      .map(({ node }) => node.fields.slug)
      .filter(slug => slug !== '/')
      .sort()
      .reduce(
        (acc, cur) => {
          if (forcedNavOrder.find(url => url === cur)) {
            return { ...acc, [cur]: [cur] }
          }

          const prefix = cur.split('/')[1]

          if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
            return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] }
          } else {
            return { ...acc, items: [...acc.items, cur] }
          }
        },
        { items: [] }
      )

    const nav = forcedNavOrder
      .reduce((acc, cur) => {
        return acc.concat(navItems[cur])
      }, [])
      .concat(navItems.items)
      .map(slug => {
        if (slug) {
          const { node } = allMdx.edges.find(
            ({ node }) => node.fields.slug === slug
          )

          return { title: node.fields.title, url: node.fields.slug }
        }
      })

    // meta tags
    return (
      <Layout {...this.props}>
        <div className={'titleWrapper'}>
          <h1 className={'title'}>{mdx.fields.title}</h1>
          <Edit className={'mobileView'}>
            <Link className={'gitBtn'} to={`${docsLocation}/`}>
              <img src={gitHub} alt={'Github logo'} /> Edit on GitHub
            </Link>
          </Edit>
        </div>
        <div className={'mainWrapper'}>
          {children}
        </div>
        <div className={'addPaddTopBottom'}>
          <NextPrevious mdx={mdx} nav={nav} />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
        }
      }
    }
  }
`
