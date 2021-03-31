import React from 'react'
import Layout from '../components/layout'
// import ReactCompareImage from 'react-compare-image'
import { ImgComparisonSlider } from '@img-comparison-slider/react';


import Img1 from '../images/travaux/compare1.jpg'
import Img2 from '../images/travaux/compare2.jpg'



import '../styles/travaux.scss'

const travaux = () => {
    return (
        <Layout>
            <div className="travaux">
                <h1>Travaux / Home Stagging</h1>
                <p>Confiez-nous l'embellissement de votre bien : jardin, mur, rénovations, petits travaux, embellissement intérieur ou extérieur, et avec un minimum d'investissement, obtenez une valorisation incomparable.</p>
                <p><strong>Nous prenons ces travaux à notre CHARGE !</strong></p>
                
            </div>

            <div className='compare_container'>
               {/* <ReactCompareImage leftImage={Img1} rightImage={Img2} />  */}
               <ImgComparisonSlider>
                    <img slot="before" src={Img1} />
                    <img slot="after" src={Img2} />
                </ImgComparisonSlider>
            </div>

            
        </Layout>
    )
}

export default travaux
