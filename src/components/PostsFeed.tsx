import React from 'react'
import styled from '@emotion/styled'
import { Link, graphql, useStaticQuery } from 'gatsby'

type Node = {
  frontmatter: {
    date: Date
    title: string
    author: string
    metaDescription: string
  }
  slug: string
  id: string
}

type DataType = {
  data: {
    allMdx: {
      nodes: Node[]
    }
  }
}

const PostsContainer = styled.div`
  margin: 2rem 0;
  & :not(:first-child) {
    margin-top: 1rem;
  }
`

const PostCard = styled.div`
  padding: 1.8rem;
  border-radius: 1.2rem;
  background-color: #dddddd;
`

const Title = styled.h1`
  margin: 0.8rem 0;
  font-size: 1.6rem;
  margin: 0.4rem 0;
`

const AuthorDate = styled.h6`
  margin: 0.6rem 0;
  font-size: 0.8rem;
  color: #5555555;
`

const Desc = styled.p`
  margin: 0.6rem 0;
  font-size: 1rem;
  color: #333333;
`

const PostsFeed = () => {
  const data: DataType = useStaticQuery(graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          author
          date(formatString: "MMM DD, YYYY")
          title
          metaDescription
        }
        id
        slug
      }
    }
  }
`)
  return (
    <PostsContainer>
      {data &&
        data.allMdx &&
        data.allMdx.nodes &&
        data.allMdx.nodes.map((node: Node) => (
          <PostCard>
            <Title>{node.frontmatter.title}</Title>
            <AuthorDate>{`${node.frontmatter.author} \u00B7 ${node.frontmatter.date}`}</AuthorDate>
            <Desc>{node.frontmatter.metaDescription}</Desc>
          </PostCard>
        ))}
    </PostsContainer>
  )
}

export default PostsFeed
