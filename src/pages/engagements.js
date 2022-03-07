import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'


import '../styles/engagements.scss'


const engagements = () => {
    return (
        <Layout>
            <SEO title="Nos engagements" /> 
            <div className='engage_container'>
                <h1 data-aos='fade-down' data-aos-duration='500' data-aos-once='true'>NOS ENGAGEMENTS</h1>

                <div className="container_image" data-aos='zoom-out' data-aos-delay='200' data-aos-once='true'>
                    <StaticImage src='../images/mecene.png' alt='' className='img_services'/>
                    
                    <p className='engage_text'>
                        L'agence HOMNERS s'est engagée à préserver l'architecture locale par le biais d'un mécénat mis en place avec bordeaux métropole pour la restauration du pont de pierre. En effet nous reversons une partie des honoraires de chaque ventes pour participer à la conservation du patrimoine local. HOMNERS s'est également engagée en tant que mécène pour l'opération (planton 1 millions d'arbres). Nous avons versé des fonds à la fondation pour participer à la plantation d'arbres sur la métropole Bordelaise.
                    </p>
                </div>

                <div className="container_image" data-aos='zoom-out' data-aos-delay='200' data-aos-once='true'>
                    <StaticImage src='../images/sponsorHomners.png' alt='' className='img_services'/>
                    
                    <p className='engage_text'>
                        HOMNERS s'engage en local en participant au frais de déplacement, d'équipements et autres auprès du club de JUDO de Cenon et également auprès d'un sportif du club particulièrement sélectionné en équipe de France pour participer à un tournoi européen. Nous souhaitons promouvoir le sport en local, et accompagner des jeunes. 
                    </p>
                </div>
                

                


            </div>

            
        </Layout>
    )
}

export default engagements
