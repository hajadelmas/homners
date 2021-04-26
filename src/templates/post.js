import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

import './post_template.scss'



export default ({ data }) => {

  const { titre, description, dateAjout, image } = data.datoCmsPost

  return (
    <Layout>
      <SEO title={titre} description={description} />
      <section className='post'>
        <h1>{titre}</h1>
        <p>Ajouté le {dateAjout}</p>
        <div className='post_container_img'>
          <GatsbyImage image={image.gatsbyImageData} alt='' className='img_box' />
        </div>
        
        <div className='post_text_container'>
          <p>{description}</p>
        </div>
        
      </section>
      

    </Layout>
  )
}

export const QueryPost = graphql`
    query MyPost($slug: String!) {
      datoCmsPost(slug: { eq: $slug }) {
        slug
        titre
        description
        id
        dateAjout(formatString: "DD/MM/yyyy")
        image {
          gatsbyImageData(
            placeholder: BLURRED,
          )
        }
      }
    }
    
`
