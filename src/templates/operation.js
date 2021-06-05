import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Slider from "react-slick"
import { GatsbyImage } from 'gatsby-plugin-image'



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./product_template.scss"


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}


 const operation = ({ data }) => {
//   const { title, date } = data.markdownRemark.frontmatter
//   const __html = data.markdownRemark.html
//   const { prev, next } = pageContext

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // adaptiveHeight: true
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const { titre, description, commune, photos, lienLeboncoin, descriptionNode } = data.datoCmsOperation

  return (
    <Layout>
      <SEO title={titre + commune} description={description} />

      <div className='container_product'>
        <div className='container_slider'>
          <Slider {...settings} className='slider_custom'>
            <GatsbyImage image={photos[0].gatsbyImageData} alt='' className='' />
            <GatsbyImage image={photos[1].gatsbyImageData} alt='' className='' />
          </Slider>
        </div>
        <div className='container_desc'>
          <h1>{titre}</h1>
          <p>Commune : {commune}</p>
          <div className='' dangerouslySetInnerHTML={{ __html: descriptionNode.childMarkdownRemark.html, }}>
          
          </div>
          <h3>Pour plus de détails, <Link to={lienLeboncoin}>Cliquez ici.</Link></h3>
        </div>
      </div>
      

    </Layout>
  )
}

export default operation

export const query = graphql`
    query MyOperation($slug: String!) {
      datoCmsOperation(slug: { eq: $slug }) {
        commune
        description
        photos {
          gatsbyImageData(width: 300)
        }
        prix
        slug
        titre
        lienLeboncoin
        id
        descriptionNode {
          childMarkdownRemark {
            html
            timeToRead
          }
        }
      }
    }

    
    
`