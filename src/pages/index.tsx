import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Welcome to the CSESoc Learning Platform!!!</h1>
      <p>
        Here you will find an abundance of educational resources on a wide range of
        programming-related topics. Have a look around!
      </p>
      <div style={{
        width: "100%"
      }}>
      <StaticImage
        src="https://cdn.talkesport.com/wp-content/uploads/technology-esports.jpg"
        alt="digital information"
        width={1200}
        // style={{
          //   width: "100%",
          //   border: "4px black solid",
          // }}
          />
          
                </div>
    </Layout>
  )
}

export default IndexPage