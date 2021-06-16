import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Slider from "react-slick"
import { GatsbyImage } from 'gatsby-plugin-image'



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./operation.scss"


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

const { titre, description, commune, photos, lienLeboncoin, descriptionNode, prix,
  typeDeBien,
  typeDeTransaction,
  bienEnCopropriete,
  nombreLotCopropriete,
  procedureDiligente,
  nombrePieces,
  chambres,
  typeChauffage,
  modeChauffage,
  calme,
  clair,
  jardin,
  neufAncien,
  etatGeneral,
  surface,
  surfaceTerrain } = data.datoCmsOperation

  return (
    <Layout>
      <SEO title={titre + commune} description={description} />

      <div className='container_product'>
        <div className='container_slider'>
          <Slider {...settings} className='slider_custom'>
            <GatsbyImage image={photos[0].gatsbyImageData} alt='' className='' />
            <GatsbyImage image={photos[1].gatsbyImageData} alt='' className='' />
            <GatsbyImage image={photos[2].gatsbyImageData} alt='' className='' />
          </Slider>
        </div>
        <div className='container_desc'>
          <h1>{titre}</h1>
          <p>Commune : {commune}</p>
          <div className='' dangerouslySetInnerHTML={{ __html: descriptionNode.childMarkdownRemark.html, }}>
          
          </div>
          {/* <h3>Pour plus de détails, <Link to={lienLeboncoin}>Cliquez ici.</Link></h3> */}
        </div>
      </div>

      <div className="tableau">
        <table>
        <tbody>
            <h3>Informations générales</h3>
          <tr>
            <th>Type de bien</th>
            <td>{typeDeBien}</td>
          </tr>
          <tr>
            <th>Type de transaction</th>
            <td>{typeDeTransaction}</td>
          </tr>
          <h3>Localisation</h3>
          <tr>
            <th>localisation</th>
            <td>{commune}</td>
          </tr>
          <h3>Aspect financier</h3>
          <tr>
            <th>Prix</th>
            <td>{prix} €</td>
          </tr>
          <h3>Copropriété</h3>
          <tr>
            <th>Bien en copropriété</th>
            <td>{bienEnCopropriete ? "oui" : "non"}</td>
          </tr>
          <tr>
            <th>Nombre de lots copro</th>
            <td>{nombreLotCopropriete}</td>
          </tr>
          <tr>
            <th>Procédures diligentées</th>
            <td>{procedureDiligente}</td>
          </tr>
          <h3>Intérieur</h3>
          <tr>
            <th>Nombre de pieces</th>
            <td>{nombrePieces}</td>
          </tr>
          <tr>
            <th>Chambres</th>
            <td>{chambres}</td>
          </tr>
          <tr>
            <th>Type de chauffage</th>
            <td>{typeChauffage}</td>
          </tr>
          <tr>
            <th>Mode de chauffage</th>
            <td>{modeChauffage}</td>
          </tr>
          <tr>
            <th>Calme</th>
            <td>{calme ? "oui" : "non"}</td>
          </tr>
          <tr>
            <th>Clair</th>
            <td>{clair ? "oui" : "non"}</td>
          </tr>
          <h3>Extérieur</h3>
          <tr>
            <th>Jardin</th>
            <td>{jardin ? "oui" : "non"}</td>
          </tr>
          <tr>
            <th>Neuf - Ancien</th>
            <td>{neufAncien}</td>
          </tr>
          <tr>
            <th>Etat général</th>
            <td>{etatGeneral}</td>
          </tr>
          <h3>Surfaces</h3>
          <tr>
            <th>Surface</th>
            <td>{surface}</td>
          </tr>
          <tr>
            <th>Surface terrain</th>
            <td>{surfaceTerrain}</td>
          </tr>
        </tbody>
      </table>
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
        typeDeBien
        typeDeTransaction
        bienEnCopropriete
        nombreLotCopropriete
        procedureDiligente
        nombrePieces
        chambres
        typeChauffage
        modeChauffage
        calme
        clair
        jardin
        neufAncien
        etatGeneral
        surface
        surfaceTerrain
      }
    }

    
    
`