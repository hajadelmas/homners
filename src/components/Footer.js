import React from 'react'
import { Link } from 'gatsby'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import DownloadFile from '../download/homners_download.pdf'

import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_container'>
                <div className="container_social">
                    <Link to=''>
                        <FaFacebook />
                    </Link>
                    <Link to=''>
                        <FaInstagram />
                    </Link>
                    <Link to=''>
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
                <div className='mysite'>
                    Copyright © {new Date().getFullYear()}. Tous droits réservés. <a href="https://www.studio-haja.fr" target='_blank' rel="noreferrer"> Créé par Studio Haja.</a>
                </div>
            </div>
            

        </footer>
    )
}

export default Footer
