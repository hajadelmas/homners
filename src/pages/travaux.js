import React from 'react'
import Layout from '../components/layout'
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import SEO from '../components/seo'


import Img1 from '../images/travaux/porte_avant (1).jpeg'
import Img2 from '../images/travaux/porte_apres (1).jpeg'
import Img3 from '../images/travaux/herbe_avant (1).jpeg'
import Img4 from '../images/travaux/herbe_apres (1).jpeg'
import Img5 from '../images/travaux/allee-avant.jpg'
import Img6 from '../images/travaux/allee-apres.jpg'
import Img7 from '../images/travaux/angle-avant.jpg'
import Img8 from '../images/travaux/angle-apres.jpg'
import Img9 from '../images/travaux/coin-avant.jpg'
import Img10 from '../images/travaux/coin-apres.jpg'
// import Img12 from '../images/travaux/cuisine-apres.jpg'
// import Img11 from '../images/travaux/cuisine-avant.jpg'
import Img13 from '../images/travaux/evier-avant.jpg'
import Img14 from '../images/travaux/evier-apres.jpg'
import Img15 from '../images/travaux/plainte-avant.jpg'
import Img16 from '../images/travaux/plainte-apres.jpg'
import Img17 from '../images/travaux/sol-avant.jpg'
import Img18 from '../images/travaux/sol-apres.jpg'



import '../styles/travaux.scss'

const travaux = () => {
    return (
        <Layout>
            <SEO title="Travaux / Home Stagging" /> 
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
                        <img slot="before" src={Img2} alt=''/>
                        <img slot="after" src={Img1} alt=''/>
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
                <div className='compare_container'>
                    <h1>Avant</h1>
                    <ImgComparisonSlider>
                        <img slot="before" src={Img6} alt=''/>
                        <img slot="after" src={Img5} alt=''/>
                    </ImgComparisonSlider>
                    <h1>Après</h1>
                </div>
                <div className='compare_container'>
                    <h1>Avant</h1>
                    <ImgComparisonSlider>
                        <img slot="before" src={Img8} alt=''/>
                        <img slot="after" src={Img7} alt=''/>
                    </ImgComparisonSlider>
                    <h1>Après</h1>
                </div>
                <div className='compare_container'>
                    <h1>Avant</h1>
                    <ImgComparisonSlider>
                        <img slot="before" src={Img10} alt=''/>
                        <img slot="after" src={Img9} alt=''/>
                    </ImgComparisonSlider>
                    <h1>Après</h1>
                </div>
                {/* <div className='compare_container'>
                    <h1>Avant</h1>
                    <ImgComparisonSlider>
                        <img slot="before" src={Img12} alt=''/>
                        <img slot="after" src={Img11} alt=''/>
                    </ImgComparisonSlider>
                    <h1>Après</h1>
                </div> */}
                <div className='compare_container'>
                    <h1>Avant</h1>
                    <ImgComparisonSlider>
                        <img slot="before" src={Img14} alt=''/>
                        <img slot="after" src={Img13} alt=''/>
                    </ImgComparisonSlider>
                    <h1>Après</h1>
                </div>
                <div className='compare_container'>
                    <h1>Avant</h1>
                    <ImgComparisonSlider>
                        <img slot="before" src={Img16} alt=''/>
                        <img slot="after" src={Img15} alt=''/>
                    </ImgComparisonSlider>
                    <h1>Après</h1>
                </div>
                <div className='compare_container'>
                    <h1>Avant</h1>
                    <ImgComparisonSlider>
                        <img slot="before" src={Img18} alt=''/>
                        <img slot="after" src={Img17} alt=''/>
                    </ImgComparisonSlider>
                    <h1>Après</h1>
                </div>
               
            </div>

            
        </Layout>
    )
}

export default travaux
