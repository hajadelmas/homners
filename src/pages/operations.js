import React, { useState } from 'react'
import Layout from '../components/layout'
import { Link, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

import '../styles/operation.scss'


const Operations = ({ data }) => {

    const [isReady, SetIsReady] = useState(false)

    const operations = data.allDatoCmsOperation.edges


    return (
        <Layout>
            <div className='operation'>
                <h1>Opérations foncières</h1>
                <h3>Que faisons nous ?</h3>
                <p>Notre société dispose d’un filiale d’investissement englobant les métiers de marchand de biens et de promoteurs immobilier .</p>
                <p>Nous achetons maisons immeubles terrains bâtiments dans le but de créer des logements et d’optimiser les surfaces.</p>
            </div>

            <div className="operation_container">

                { isReady ? operations.map(({ node : operation })  => (
                        <div key={operation.id} className='articles_pos_ope'>
                            <div  className='articles_ope'>
                                <GatsbyImage image={operation.photos[0].gatsbyImageData} alt='' />
                                <div className='ope_text_container'>
                                {/* <h3>{operation.dateAjout}</h3> */}
                                <h2>{operation.titre}</h2>
                                {/* <p>{post.description}</p> */}
                                <Link to={operation.slug}>Lire la suite</Link>
                                </div>
                                
                            </div>
                        </div>
                    )) : <h2 className='workInProgress'>Cette page est en cours de construction ...</h2> }


                
            </div>
        </Layout>
    )
}

export default Operations

export const query = graphql`
query MyOperations {
    allDatoCmsOperation {
        edges {
          node {
            commune
            description
            lienLeboncoin
            prix
            titre
            slug
            photos {
              gatsbyImageData(width: 300)
            }
          }
        }
    }
}
`
