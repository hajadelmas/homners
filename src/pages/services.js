import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/layout'
import Timeline from '../components/Timeline'
import SEO from '../components/seo'

import '../styles/services.scss'


const services = () => {
    return (
        <Layout>
            <SEO title="Services" /> 
            <section className="services">
                <h1
                data-aos='fade-down'
                data-aos-once='true'
                >
                    Nos services
                </h1>
                <div className="container_image" data-aos='fade-down' data-aos-once='true' data-aos-delay='150'>
                    <StaticImage src='../images/house-1.jpg' alt='' className='img_services'/>
                </div>
            </section>

            <Timeline />
            
            
        </Layout>
    )
}

export default services
