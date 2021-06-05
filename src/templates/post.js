import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'


import './post_template.scss'



 const post = ({ data }) => {

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
        
        <div className='post_text_container' dangerouslySetInnerHTML={{ __html: data.datoCmsPost.descriptionNode.childMarkdownRemark.html, }}>
          {/* { data.datoCmsPost.descriptionNode.childMarkdownRemark.html } */}
        </div>
        
      </section>
      

    </Layout>
  )
}

export default post

export const QueryPost = graphql`
    query MyPost($slug: String!) {
      datoCmsPost(slug: { eq: $slug }) {
        slug
        titre
        descriptionNode {
          childMarkdownRemark {
            html
            timeToRead
          }
        }
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
