import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navbar from "./Navbar";

interface propTypes {
    pageTitle?: string;
    children: React.ReactNode;
}

const Layout = (props: propTypes) => {
    /*
     * Components make graphql queries using `useStaticQuery` hook within component
     */
    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div>
            <title>
                {props.pageTitle
                    ? `${props.pageTitle} | `
                    : "" + data.site.siteMetadata.title}
            </title>

            {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/creators">Creators</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav> */}
            <Navbar />
            <main style={{ paddingTop: 50 }}>{props.children}</main>
        </div>
    );
};

export default Layout;
