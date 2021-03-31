import React from 'react'
import Layout from '../components/layout'

const contactUs = () => {
    return (
        <Layout>
            <div className="contact-us">
                <div className="container_contact_1">
                <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />

                    <p>
                        <label>Votre Nom: <input type="text" name="name" /></label>   
                    </p>
                    <p>
                        <label>Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Votre Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Envoyer</button>
                    </p>


                </form>
                </div>
                <div className="container_contact_2"></div>
            </div>
        </Layout>
    )
}

export default contactUs
