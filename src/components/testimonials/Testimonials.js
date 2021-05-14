import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './Testimonials.scss'


const Testimonials = () => {

       

    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        interval={6100}
        >
            <div>
                <StaticImage src='../../images/users-icons.png' alt=''/>
                {/* <img src="../../images/grid-1.jpg" alt=""/> */}
                <div className="myCarousel">
                    <h3>Eric S.</h3>
                    <h4>Avis recueilli par MeilleursAgents.com - Ref. MA2077818948</h4>
                    <p>
                    Agent immobilier disponible, très sympathique et compétent.
                    </p>
                </div>
            </div>
            <div>
                <StaticImage src='../../images/users-icons.png' alt=''/>
                {/* <img src="../../images/grid-2.jpg" alt=""/> */}
                <div className="myCarousel">
                    <h3>Julien S.</h3>
                    <h4>Avis recueilli par MeilleursAgents.com - Ref. MA2082408608</h4>
                    <p>
                    Agents très compétents et conviviaux. Excellente expérience pour notre premier achat immobilier.
                    </p>
                </div>
            </div>
            <div>
                <StaticImage src='../../images/users-icons.png' alt=''/>
                {/* <img src="../../images/grid-3.jpg" alt=""/> */}
                <div className="myCarousel">
                    <h3>Stéphane U.</h3>
                    <h4>Avis recueilli par MeilleursAgents.com - Ref. MA2082222899</h4>
                    <p>
                    Equipe professionnelle, dynamique, compétente, réactive, à l'écoute, dans l'accompagnement, nous recommandons fortement à tous les acheteurs et vendeurs d'un bien immobilier l'agence Homners, nous sommes très satisfaits de leurs prestations.
                    </p>
                </div>
            </div>
        </Carousel>

    )
}

export default Testimonials
