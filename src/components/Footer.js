import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer_container'>
                <div className='mysite'>
                © {new Date().getFullYear()}, Créé par
                {` `}
                <a href="https://www.studio-haja.fr">Studio Haja</a>
                </div>
            </div>
            

        </section>
    )
}

export default Footer
