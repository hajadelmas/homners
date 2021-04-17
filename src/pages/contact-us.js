import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/contact-us.scss'

const contactUs = () => {
    return (
        <Layout>
            <SEO title="Contact" /> 
            <div className="contact-us">

                <div className="container_contact_1">

                    <h1>Contactez nous</h1>
                    <h2>Remplissez le formulaire ci-dessous ou appelez-nous directement au 05 56 48 36 49</h2>

                    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className='form_container'>
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />

                            <input type="text" name="name" placeholder='Votre Nom' />

                            <input type="text" name="surname" placeholder='Votre Prénom' />

                            <input type="tel" id='phone' name="phone" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" placeholder='06-00-00-00-00' required />
                        
                            <input type="email" name="email" placeholder='Email' />

                            <textarea name="message" placeholder='Votre demande ...' rows="4" cols="100" />

                            <button type="submit">Envoyer</button>

                    </form>
                </div>

                <div className="container_contact_2">
                    <div className="adresse_1">
                        <h3>Homners immobilier Bordeaux</h3>
                        <p>
                            TÉLÉPHONE FIXE : 05 56 48 36 49
                        </p>

                        <p>
                            PORTABLE : 06 81 48 62 19 / 06 18 07 26 29
                        </p>

                        <p>
                            ADRESSE : 13, rue Saint Rémi 33000
                            Bordeaux
                        </p>

                        <p>
                            Nº carte de transaction : 3301 2017
                            000 022
                        </p>
                        <p>
                            RCS : 833466899-00014
                        </p>
                    </div>
                    <div className="adresse_2">
                        <h3>Homners immobilier Bassin d'Arcachon</h3>
                        <p>
                            TÉLÉPHONE FIXE : 05 56 48 36 49
                        </p>

                        <p>
                            PORTABLE : 06 81 48 62 19 / 06 18 07 26 29
                        </p>

                        <p>
                            ADRESSE : 22, rue du paradis aux
                            canards
                            33260 La teste de Buch
                        </p>

                        <p>
                            Nº carte de transaction : 3301 2017 000 022
                        </p>
                        <p>
                            RCS : 833466899-00014
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default contactUs
