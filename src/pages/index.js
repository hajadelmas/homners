import * as React from "react"
// import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Calculator from '../components/calculator/Calculator'
import Testimonials from "../components/testimonials/Testimonials"

// Icons
import { ImPriceTag } from 'react-icons/im'
import { FaSign } from 'react-icons/fa'
import { IoIosCalculator } from 'react-icons/io'
import { AiOutlineFormatPainter } from 'react-icons/ai'
import { GiShakingHands } from 'react-icons/gi'

import '../styles/index.scss'


const IndexPage = ({ data }) => {

  return (
  <Layout>
    <SEO title="Accueil" /> 
    <Hero />

    <section className="desc">
      <h1
      data-aos='fade-up'
      data-aos-duration='300'
      data-aos-once='true'
      data-aos-easing='ease-in-out'
      >
        Qui sommes-nous ?
      </h1>
      <p
      data-aos='fade-up'
      data-aos-duration='300'
      data-aos-once='true'
      data-aos-easing='ease-in-out'
      data-aos-delay='150'
      >
        Vous cherchez à vendre rapidement et au meilleur prix votre bien immobilier sur la métropole de Bordeaux ou sur le bassin d'Arcachon ?
      </p>
      <p
      data-aos='fade-up'
      data-aos-duration='300'
      data-aos-once='true'
      data-aos-easing='ease-in-out'
      data-aos-delay='200'
      >
        Avec Homners, vous bénéficiez d'un véritable accompagnement par des professionnels de l'immobilier, tout en conservant les avantages d'une vente de particulier à particulier. En effet, nous sommes une agence immobilière nouvelle génération, dont la rémunération est basée sur un forfait fixe plutôt qu'un pourcentage, avec un seul objectif : vous satisfaire et vous aider à vendre votre bien rapidement en toute transparence.
      </p>
    </section>

    <section className='atouts'>
      <div className="home_padding">
        <h1>Nos Atouts</h1>
      </div>
      
      <div className="color_container">

        <div className="info_container"
        data-aos='fade-up'
        data-aos-duration='300'
        data-aos-once='true'
        >
          <ImPriceTag />
          <h3>honoraires attractifs</h3>
        </div>

        <div className="info_container"
        data-aos='fade-up'
        data-aos-duration='300'
        data-aos-delay='100'
        data-aos-once='true'
        >
          <FaSign />
          <h3>vente 30 jours</h3>
        </div>

        <div className="info_container"
        data-aos='fade-up'
        data-aos-duration='300'
        data-aos-delay='150'
        data-aos-once='true'
        >
          <IoIosCalculator />
          <h3>Estimation</h3>
        </div>

        <div className="info_container"
        data-aos='fade-up'
        data-aos-duration='300'
        data-aos-delay='200'
        data-aos-once='true'
        >
          <AiOutlineFormatPainter />
          <h3>service additionnels</h3>
        </div>

        <div className="info_container"
        data-aos='fade-up'
        data-aos-duration='300'
        data-aos-delay='250'
        data-aos-once='true'
        >
          <GiShakingHands />
          <h3>accompagnement</h3>
        </div>
        
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
          className='img_calcul'
        />
        <div className='calculs_mod' data-aos='fade-right' data-aos-duration='500' data-aos-easing='ease-in-out' data-aos-once='true'>
          <Calculator />
        </div>
      </div>
    </section>


    <section className='etapes'>

        <h1>la vente de votre bien en 4 étapes</h1>

      <div className='etapes_container'>

        <div className='carre_box'
        data-aos='fade-up'
        data-aos-duration='400'
        data-aos-once='true'
        >
          <StaticImage
            className='carre_image'
            src="../images/grid-1.jpg"
            alt="yo"
          />
          <h3>L' estimation gratuite de votre bien est sans engagement !</h3>
        </div>

        <div className='carre_box'
        data-aos='fade-up'
        data-aos-duration='400'
        data-aos-once='true'
        data-aos-delay='150'
        >
          <StaticImage
            className='carre_image'
            src="../images/grid-2.jpg"
            alt="yo"
          />
          <h3>La création de l'annonce de vente et publication sur internet est immédiate</h3>
        </div>

        <div className='carre_box'
        data-aos='fade-up'
        data-aos-duration='400'
        data-aos-once='true'
        data-aos-delay='200'
        >
          <StaticImage
            className='carre_image'
            src="../images/grid-3.jpg"
            alt="yo"
          />
          <h3>Planification des visites et réception des offres</h3>
        </div>

        <div className='carre_box'
        data-aos='fade-up'
        data-aos-duration='400'
        data-aos-once='true'
        data-aos-delay='250'
        >
          <StaticImage
            className='carre_image'
            src="../images/grid-4.jpg"
            alt="yo"
          />
          <h3>Suivi jusqu'à l'acte authentique chez le notaire</h3>
        </div>

      </div>
    </section>

    <section className="testimonials">
      <div className="home_padding">
        <h1 data-aos='fade-down' data-aos-once='true'>Avis clients</h1>
      </div>
      <Testimonials />
    </section>

    
    
  </Layout>
  )
}



export default IndexPage
