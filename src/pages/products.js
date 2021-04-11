import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import '../styles/products.scss'

const products = ({ data }) => {

    const products = data.allDatoCmsProduct.edges


    return (
        <Layout>
            <div className='products'>
                <h1>Nos Biens</h1>
            </div>
            <div className='products_container'>
            {
                products.map(({ node: product }) => (
                    <div key={product.id} className='products_details'>
                      <GatsbyImage image={product.photos[0].gatsbyImageData} alt=''/>
                      <h2>{product.titre}</h2>
                      <h3>{product.commune}</h3>
                      <Link to={product.slug}>Détails +</Link>
                    </div>
                    )
                )
            }
            </div>
        </Layout>
    )
}

export default products

export const query = graphql`
  query MyProducts {
    allDatoCmsProduct {
      edges {
        node {
          titre
          commune
          id
          description
          slug
          photos {
            gatsbyImageData(
              width: 300
            )
          }
        }
      }
    }
  }
  
`
