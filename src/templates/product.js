import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Slider from "react-slick"
import { GatsbyImage } from 'gatsby-plugin-image'



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./product_template.scss"


export default ({ data }) => {
//   const { title, date } = data.markdownRemark.frontmatter
//   const __html = data.markdownRemark.html
//   const { prev, next } = pageContext

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true
};

const { titre, description, commune, photos, lienLeboncoin } = data.datoCmsProduct

  return (
    <Layout>
      <SEO title={titre} description={description} />
      <div className='container_product'>
        <div className='container_slider'>
          <Slider {...settings}>
            <GatsbyImage image={photos[0].gatsbyImageData} alt='' className='' />
            <GatsbyImage image={photos[1].gatsbyImageData} alt='' className='' />
          </Slider>
        </div>
        <div className='container_desc'>
          <h1>{titre}</h1>
          <p>{description}</p>
          <h3>Pour plus de détails, <Link to={lienLeboncoin}>Cliquez ici.</Link></h3>
        </div>
      </div>
      

    </Layout>
  )
}

export const query = graphql`
    query MyProduct($slug: String!) {
      datoCmsProduct(slug: { eq: $slug }) {
        titre
        commune
        id
        description
        slug
        lienLeboncoin
        photos {
          gatsbyImageData(
            width: 300
          )
        }
      }
    }
    
`