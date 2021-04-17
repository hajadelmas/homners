import React from 'react'
import { Link, graphql } from "gatsby"
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/posts.scss'

const posts = ({ data }) => {

    const posts = data.allDatoCmsPost.edges

    // const image = getImage(posts.image)

    return (
        <Layout>
          <SEO title="BLOG" /> 
            <div className="post_container">
                <h1>BLOG</h1>
                <div className="container_image">
                    <StaticImage src='../images/house-1.jpg' alt='' className='img_services'/>
                    <div className="blackText">
                        <h3>Toutes nos actus</h3>
                    </div>
                </div>

                <div className="articles_container">
                    {
                        posts.map(({ node: post }, i) => {
                          if((i+1) % 2 == 0) {
                            return (
                              <div key={post.id} className='articles_pos1'>
                                <div  className='articles'>
                                  <GatsbyImage image={post.image.gatsbyImageData} alt='' />
                                  <div className='articles_text_container'>
                                    <h3>{post.dateAjout}</h3>
                                    <h2>{post.titre}</h2>
                                    {/* <p>{post.description}</p> */}
                                    <Link to={post.slug}>Lire la suite</Link>
                                  </div>
                                    
                                </div>
                              </div>
                            
                        )
                          } else {
                            return (
                              <div key={post.id} className='articles_pos2'>
                                <div  className='articles'>
                                  <GatsbyImage image={post.image.gatsbyImageData} alt='' />
                                  <div className='articles_text_container'>
                                    <h3>{post.dateAjout}</h3>
                                    <h2>{post.titre}</h2>
                                    {/* <p>{post.description}</p> */}
                                    <Link to={post.slug}>Lire la suite</Link>
                                  </div>
                                    
                                </div>
                              </div>
                            )
                          }
                        })
                    }
                </div>
            </div>

                
            
        </Layout>
    )
}

export default posts

export const query = graphql`
  query MyPosts {
    allDatoCmsPost(sort: {fields: dateAjout, order: DESC}) {
      edges {
        node {
          titre
          id
          description
          slug
          dateAjout(formatString: "DD/MM/yyyy")
          image {
            gatsbyImageData(
              width: 400,
              placeholder: BLURRED,
            )
          }
        }
      }
    }
  }
  
`