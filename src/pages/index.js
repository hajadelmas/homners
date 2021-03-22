import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

import Calculator from '../components/calculator/Calculator'

import '../styles/index.scss'

const IndexPage = ({ data }) => {


  const content = data.allDatoCmsPost.edges.map(({ node: post }) => (
    <div key={post.id}>
      <h3>{post.titre}</h3>
      <p>{post.description}</p>
      <Link to={post.slug}>Aller blog</Link>
    </div>
    
  ))

  const contentProduct = data.allDatoCmsProduct.edges.map(({ node: product }) => (
    <div key={product.id}>
      <h3>{product.titre}</h3>
      <p>{product.description}</p>
      <Link to={product.slug}>Aller store</Link>
    </div>
    
  ))

  return (
  <Layout>
    <SEO title="Home" /> 
    <Hero />

    <section className="desc">
      <h1>Qui sommes-nous ?</h1>
      <p>Vous cherchez à vendre rapidement et au meilleur prix votre bien immobilier sur la métropole de Bordeaux ou sur le bassin d'Arcachon ?</p>
      <p>Avec Homners, vous bénéficiez d'un véritable accompagnement par des professionnels de l'immobilier, tout en conservant les avantages d'une vente de particulier à particulier. En effet, nous sommes une agence immobilière nouvelle génération, dont la rémunération est basée sur un forfait fixe plutôt qu'un pourcentage, avec un seul objectif : vous satisfaire et vous aider à vendre votre bien rapidement en toute transparence.</p>
    </section>

    <section className='atouts'>
      <div className="home_padding">
        <h1>Nos Atouts</h1>
      </div>
      
      <div className="color_container">

      </div>
    </section>

    <section className="calculs">
      <div className="home_padding">
        <h1>Calcul de vos economies</h1>
        <p>L'agence immobilière Homners, ce sont des honoraires réduits fixes et sans surprises : <strong> 15 à 30% moins cher qu'une agence traditionnelle</strong> .</p>
      </div>

      <div className='calculs_container'>
        <StaticImage
          src="../images/calcul-img.jpg"
          alt="A Gatsby astronaut"
          style={{ width: `60%` }}
        />
        <div className='calculs_mod'>
          <Calculator />
        </div>
      </div>
    </section>


    <section className='etapes'>

        <h1>la vente de votre bien en 4 étapes</h1>

      <div className='etapes_container'>

        <div className='carre_box'>
          <StaticImage
            className='carre_image'
            src="../images/grid-1.jpg"
            alt="yo"
          />
          <h3>L' estimation gratuite de votre bien est sans engagement !</h3>
        </div>

        <div className='carre_box'>
          <StaticImage
            className='carre_image'
            src="../images/grid-2.jpg"
            alt="yo"
          />
          <h3>La création de l'annonce de vente et publication sur internet est immédiate</h3>
        </div>

        <div className='carre_box'>
          <StaticImage
            className='carre_image'
            src="../images/grid-3.jpg"
            alt="yo"
          />
          <h3>Planification des visites et réception des offres</h3>
        </div>

        <div className='carre_box'>
          <StaticImage
            className='carre_image'
            src="../images/grid-4.jpg"
            alt="yo"
          />
          <h3>Suivi jusqu'à l'acte authentique chez le notaire</h3>
        </div>

      </div>
    </section>

    {/* <div className='index_container'>
      { content }
      { contentProduct }
    </div>


    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
    
  </Layout>
  )
}



export default IndexPage

export const query = graphql`
  query {
    allDatoCmsPost {
      edges {
        node {
          titre
          id
          description
          slug
        }
      }
    }
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
