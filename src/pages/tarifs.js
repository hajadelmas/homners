import React from 'react'
import Layout from '../components/layout'
import { BsFillHouseFill } from 'react-icons/bs'
import { Link } from 'gatsby'
import SEO from '../components/seo'

import '../styles/tarifs.scss'

const tarifs = () => {
    return (
        <Layout>
            <SEO title="Tarifs" /> 
            <div className="tarifs">
                <h1>Nos Tarifs</h1>
                <h3>Estimation gratuite, valable pour tout type de biens sans engagement.</h3>
                <p>L'agence immobilière Homners est une agence immobilière classique, dont la rémunération est forfaitaire, et non pas à la commission, ce qui permet de générer d'importantes économies à nos clients.</p>
                <p>Nos forfaits s'appliquent uniquement une fois la vente de votre bien entériné par l'acte notarial, comme dans toute transaction assurée par un professionnel.</p>
                <p>Nous apportons également des services complémentaires pour mettre en valeur votre bien, <strong>a nos frais pour apporter une revalorisation et donc optimiser le prix de vente</strong>.</p>
                <p>L'estimation de votre maison ou votre appartement est gratuite, et vous décidez ensuite de la manière dont nous allons travailler ensemble, en fonction de vos besoins et de vos attentes.</p>
            </div>

            <div className="container_carre">
                <div className="carre_couleur">
                    <h1>Forfait Eco <span>1.990€*</span> ttc</h1>
                    <h3>Le moins cher de France</h3>
                    

                    <ul>
                        <li><BsFillHouseFill /> Estimation gratuite de votre bien</li>
                        <li><BsFillHouseFill /> Photos</li>
                        <li><BsFillHouseFill /> Visites assurées par le propriétaire</li>
                        <li><BsFillHouseFill /> Coaching visite</li>
                        <li><BsFillHouseFill /> Visibilité internet optimale</li>
                        <li><BsFillHouseFill /> Suivi de la vente</li>
                        <li><BsFillHouseFill /> Agenda personnalisé</li>
                        <li><BsFillHouseFill /> Négociation d'offres d'achat</li>
                        <li><BsFillHouseFill /> Dossier de vente et accompagnement</li>
                        
                    </ul>
                </div>

                <div className="carre_couleur">
                    <h1>Forfait Plus <span>9.990€*</span> ttc</h1>
                    <h3>Maximisez vos chances de vendre, minimisez les contraintes, gagnez du temps et de la tranquillité</h3>
                    

                    <ul>
                        <li><BsFillHouseFill /> Estimation gratuite de votre bien</li>
                        <li><BsFillHouseFill /> Photos</li>
                        <li><BsFillHouseFill /> Coaching visite</li>
                        <li><BsFillHouseFill /> Visibilité internet optimale</li>
                        <li><BsFillHouseFill /> Suivi de la vente</li>
                        <li><BsFillHouseFill /> Agenda personnalisé</li>
                        <li><BsFillHouseFill /> Négociation d'offres d'achat</li>
                        <li><BsFillHouseFill /> Dossier de vente et accompagnement</li>
                        <li><BsFillHouseFill /> Visites assurées par notre agent immobilier de quartier</li>
                        <li><BsFillHouseFill /> Visite virtuel</li>
                        <li><BsFillHouseFill /> Service photo professionnel</li>
                        <li><BsFillHouseFill /> Essai du logement</li>
                    </ul>
                </div>

                <div className="carre_couleur">
                    <h1>Forfait Premium <span>8.990€*</span> ttc</h1>
                    <h3>Donnez un maximum de valorisation à votre bien, et augmentez son prix de vente</h3>
                    

                    <ul>
                        <li><BsFillHouseFill /> Estimation gratuite de votre bien</li>
                        <li><BsFillHouseFill /> Photos</li>
                        <li><BsFillHouseFill /> Coaching visite</li>
                        <li><BsFillHouseFill /> Visibilité internet optimale</li>
                        <li><BsFillHouseFill /> Suivi de la vente</li>
                        <li><BsFillHouseFill /> Agenda personnalisé</li>
                        <li><BsFillHouseFill /> Négociation d'offres d'achat</li>
                        <li><BsFillHouseFill /> Dossier de vente et accompagnement</li>
                        <li><BsFillHouseFill /> Visites assurées par notre agent immobilier de quartier</li>
                        <li><BsFillHouseFill /> Visite virtuel</li>
                        <li><BsFillHouseFill /> Service photo professionnel</li>
                        <li><BsFillHouseFill /> Service valorisation *</li>
                        <li><BsFillHouseFill /> Service diagnostic technique</li>
                        <li><BsFillHouseFill /> Embellissement intérieur (peinture)</li>
                        <li><BsFillHouseFill /> Désencombrement ou nettoyage du jardin</li>
                        <li><BsFillHouseFill /> HOME STAGGING</li>
                        <li><BsFillHouseFill /> Aide au déménagement</li>
                        <li><BsFillHouseFill /> Gestion de la vente et de l'achat dans le carde d'une mutation professionnelle (on vous trouve un bien et on vend le vôtre)</li>
                        <li><BsFillHouseFill /> Essai du logement</li>
                    </ul>
                </div>
            </div>

            <div className='tarif_contact'>
                <h2>Vous avez des questions ?</h2>
                <div className='contact_button'>
                    <Link to='/contact-us'>Nous Contacter</Link>
                </div>
            </div>


        </Layout>
    )
}

export default tarifs
