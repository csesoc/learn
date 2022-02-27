import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

interface propTypes {
  pageTitle?: string
  children: React.ReactNode
}

const Layout = (props: propTypes) => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <title>{props.pageTitle ? `${props.pageTitle} | ` : '' + data.site.siteMetadata.title}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/publication">Publication</Link></li>
          <li><Link to="/creators">Creators</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
