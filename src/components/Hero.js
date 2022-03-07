import React, { useState, useRef, useEffect } from 'react'
// import styled, { css } from 'styled-components/macro'
// import { Button } from './Button'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import { SliderData } from './SliderData'
import { motion, AnimatePresence } from 'framer-motion'

import './Hero.scss'

const Hero = () => {

    const slides = SliderData

    const [current, setCurrent] = useState(0)

    const length = slides.length

    const timeout = useRef(null)

    useEffect(() => {
        
        const nextSlide= () => {
            setCurrent(current => (current === length -1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 10000)

        return function () {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }

    }, [current, length])

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current ===  0 ? length - 1  : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }


    //FRAMER
    const fadeAnimation = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition : { duration: 0.8 }},
        exit: { opacity: 0 }

    }


    return (
        <section className='HeroSection'>
            <div className='HeroWrapper'>
                <AnimatePresence>
                    {slides.map((slide, index) => {
                    return (
                        <div className='HeroSlide' key={index}>
                            {index === current && (
                            <div className='HeroSlider'>
                                <motion.img className='HeroImage'
                                src={slide.image}
                                alt={slide.alt}
                                initial='hidden'
                                animate='visible'
                                exit='exit'
                                variants={fadeAnimation}
                                />
                                <div className='HeroContent'>
                                    <h1 data-aos="fade-down"
                                    data-aos-duration="600"
                                    >
                                        {slide.title}
                                    </h1>
                                    <p
                                    data-aos="fade-down"
                                    data-aos-duration="600"
                                    data-aos-delay='200'
                                    >
                                        {slide.desc}
                                    </p>
                                    <button
                                    className='Button'
                                    to={slide.path}
                                    primary='true'
                                    // css={`max-width: 160px`}
                                    data-aos="zoom-out"
                                    data-aos-duration="500"
                                    data-aos-delay='250'
                                    >
                                        {slide.label}
                                        <IoMdArrowRoundForward className='Arrow' />
                                    </button>
                                </div>
                            </div>
                            )}

                        </div>
                        )
                    })}
                </AnimatePresence>
                
                <div className='SliderButtons'>
                    <IoArrowBack className='PrevArrow' onClick={prevSlide}/>
                    <IoArrowForward className='NextArrow' onClick={nextSlide}/>
                </div>

                <div className="arrow_down">
                    <IoIosArrowDown />
                </div>
            </div>
        </section>
    )
}

export default Hero