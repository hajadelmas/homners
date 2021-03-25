import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"


const post = data  => {

  const { titre, description } = data.datoCmsPost

  return (
    <Layout>
      <SEO title="post" description="posts" />
      <h3>{titre}</h3>
      <p>{description}</p>

    </Layout>
  )
}

export default post

export const QueryPost = graphql`
    query($slug: String!) {
      datoCmsPost(slug: { eq: $slug }) {
        slug
        titre
        description
        id
      }
    }
    
`
