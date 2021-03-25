import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"


const product =  data  => {
//   const { title, date } = data.markdownRemark.frontmatter
//   const __html = data.markdownRemark.html
//   const { prev, next } = pageContext

const { titre, description } = data.datoCmsProduct

  return (
    <Layout>
      <SEO title="Produits" description="produits" />
      <h3>{titre}</h3>
      <p>{description}</p>

    </Layout>
  )
}

export default product

export const query = graphql`
    query($slug: String!) {
      datoCmsProduct(slug: { eq: $slug }) {
        slug
        titre
        description
        id
        }
    }
    
`