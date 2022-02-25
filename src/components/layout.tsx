import React from 'react'
import { Link } from 'gatsby'

interface propTypes {
  pageTitle?: string
  children: React.ReactNode
}

const Layout = (props: propTypes) => {
  return (
    <div>
      <title>{props.pageTitle ? `${props.pageTitle} | ` : '' + 'CSESoc Learning Platform'}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalogue">Catalogue</Link></li>
          <li><Link to="/creators">Creators</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
