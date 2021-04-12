import React from 'react'
import Layout from '../components/layout'
import { ImgComparisonSlider } from '@img-comparison-slider/react';


import Img1 from '../images/travaux/porte_avant (1).jpeg'
import Img2 from '../images/travaux/porte_apres (1).jpeg'
import Img3 from '../images/travaux/herbe_avant (1).jpeg'
import Img4 from '../images/travaux/herbe_apres (1).jpeg'



import '../styles/travaux.scss'

const travaux = () => {
    return (
        <Layout>
            <div className="travaux">
                <h1>Travaux / Home Stagging</h1>
                <p>Confiez-nous l'embellissement de votre bien : jardin, mur, rénovations, petits travaux, embellissement intérieur ou extérieur, et avec un minimum d'investissement, obtenez une valorisation incomparable.</p>
                <p><strong>Nous prenons ces travaux à notre CHARGE !</strong></p>
            </div>

            <div className='container_travaux'>
                <h1>Exemple travaux</h1>

                <div className='compare_container'>
                    <h1>Avant</h1>
                    <ImgComparisonSlider>
                        <img slot="before" src={Img1} alt=''/>
                        <img slot="after" src={Img2} alt=''/>
                    </ImgComparisonSlider>
                    <h1>Après</h1>
                </div>
                <div className='compare_container'>
                    <h1>Avant</h1>
                    <ImgComparisonSlider>
                        <img slot="before" src={Img4} alt=''/>
                        <img slot="after" src={Img3} alt=''/>
                    </ImgComparisonSlider>
                    <h1>Après</h1>
                </div>
               
            </div>

            
        </Layout>
    )
}

export default travaux
