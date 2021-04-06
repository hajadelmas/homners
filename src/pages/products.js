import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'

import '../styles/products.scss'

const products = ({ data }) => {

    const products = data.allDatoCmsProduct.edges

    return (
        <Layout>
            <div className='products_container'>
                <h1>Nos Biens</h1>
            </div>
            <div>
            {
                products.map(({ node: product }) => (
                    <div key={product.id} className='articles_pos1'>
                        <div  className='articles'>
                            {/* <GatsbyImage image={post.image.gatsbyImageData} alt='' /> */}
                            <div className='articles_text_container'>
                            {/* <h3>{post.dateAjout}</h3> */}
                            <h1>{product.titre}</h1>
                            {/* <p>{post.description}</p> */}
                            <Link to={product.slug}>Lire la suite</Link>
                            </div>
                            
                        </div>
                    </div>
                    )
                )
            }
            </div>
            Products
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
          id
          description
          slug
        }
      }
    }
  }
  
`
