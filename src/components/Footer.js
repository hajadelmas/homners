import React from 'react'
import { Link } from 'gatsby'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import DownloadFile from '../download/honoraires_2.pdf'

import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_container'>
                <div className="container_social">
                    <Link to='https://www.facebook.com/HomnersImmobilier/'>
                        <FaFacebook />
                    </Link>
                    <Link to='/404'>
                        <FaInstagram />
                    </Link>
                    <Link to='https://www.linkedin.com/company/homners-immobilier/'>
                        <FaLinkedin />
                    </Link>
                </div>
                <div className="container_pages">
                    <Link to='/'>Accueil</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/tarifs'>Tarification</Link>
                    <a href={DownloadFile} download>Télécharger tarification</a>
                    <Link to='/travaux'>Travaux</Link>
                    <Link to='/products'>Biens</Link>
                    <Link to='/posts'>Blog</Link>
                    <Link to='/operations'>Opérations</Link>
                    <Link to='/contact-us'>Contact</Link>
                </div>
                <div className='container_horaires'>
                    <h3>Horaires d'ouvertures</h3>
                    <span>Lundi 9h - 12h30 & 14h - 19h</span>
                    <span>Mardi 9h - 12h30 & 14h - 19h</span>
                    <span>Mercredi 9h - 12h30 & 14h - 19h</span>
                    <span>Jeudi 9h - 12h30 & 14h - 19h</span>
                    <span>Vendredi 9h - 12h30 & 14h - 19h</span>
                    <span>Samedi 9h - 12h30 (sur rendez-vous)</span>
                </div>
                <div className='mysite'>
                    Copyright © {new Date().getFullYear()}. Tous droits réservés. <a href="https://www.studio-haja.fr" target='_blank' rel="noreferrer"> Créé par Studio Haja.</a>
                </div>
            </div>
            

        </footer>
    )
}

export default Footer
