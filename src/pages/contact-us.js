import React from 'react'
import Layout from '../components/layout'

import '../styles/contact-us.scss'

const contactUs = () => {
    return (
        <Layout>
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

                <div className="container_contact_2"></div>
            </div>
        </Layout>
    )
}

export default contactUs
