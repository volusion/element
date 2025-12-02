import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Link from './link'
import './styles.css'
import config from '../../config.mjs'

const forcedNavOrder = config.sidebar.forcedNavOrder

const Sidebar = styled('aside')`
  width: 100%;
  background-color: #fff;
  border-right: 1px solid #ede7f3;
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-left: 24px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`

// eslint-disable-next-line no-unused-vars
const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} />
    </li>
  )
})`
  list-style: none;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: rgb(116, 76, 188) !important;
    }

    ${props =>
      props.active &&
      `
      color: #663399;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      let finalNavItems
      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        allMdx.edges.forEach((item) => {
          if (item !== undefined && item.node) {
            const itemPath = item.node.fields.slug
            const currentPath = location.pathname.replace(/\/$/, '') // Remove trailing slash
            const itemPathNormalized = itemPath.replace(/\/$/, '') // Remove trailing slash
            const pathWithPrefix = (config.gatsby.pathPrefix + itemPath).replace(/\/$/, '')
            
            if (itemPathNormalized === currentPath || pathWithPrefix === currentPath) {
              if (item.node.tableOfContents && item.node.tableOfContents.items) {
                finalNavItems = item.node.tableOfContents.items.map(
                  (innerItem, index) => {
                    const itemId = innerItem.title
                      ? innerItem.title.replace(/\s+/g, '').toLowerCase()
                      : '#'
                    return (
                      <ListItem key={index} to={`#${itemId}`} level={1}>
                        {innerItem.title}
                      </ListItem>
                    )
                  }
                )
              }
            }
          }
        })
      }

      if (finalNavItems && finalNavItems.length) {
        return (
          <Sidebar>
            <ul className={'rightSideBarUL'}>
              <li className={'rightSideTitle'}>CONTENTS</li>
              {finalNavItems}
            </ul>
          </Sidebar>
        )
      } else {
        return (
          <Sidebar>
            <ul></ul>
          </Sidebar>
        )
      }
    }}
  />
)

export default SidebarLayout
