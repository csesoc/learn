import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

interface propTypes {
  data: any;
}

const Publications = (props: propTypes) => {

  return (
    <Layout pageTitle="Publications">
      <p>Article cards go here</p>
      <ul>
        {props.data.allFile.nodes
          .filter((node: any) => node.extension === 'mdx')
          .map((node: any) => (
            <li key={node.id}>{node.name}</li>
          ))}
      </ul>
    </Layout>
  )
}

/*
 * Pages make graphql queries using "page queries" like so.
 * This queried data is fed into the page component on initial render.
 */
export const query = graphql`
  query {
    allFile {
      nodes {
        id
        extension
        name
      }
    }
  }
`

export default Publications
