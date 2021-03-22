import React, { useState, useRef, useEffect } from 'react'
// import styled, { css } from 'styled-components/macro'
// import { Button } from './Button'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'
import { SliderData } from './SliderData'

import './Hero.scss'

const Hero = () => {

    const slides = SliderData

    const [current, setCurrent] = useState(0)

    const length = slides.length

    const timeout = useRef(null)

    // useEffect(() => {
        
    //     const nextSlide= () => {
    //         setCurrent(current => (current === length -1 ? 0 : current + 1))
    //     }

    //     timeout.current = setTimeout(nextSlide, 5000)

    //     return function () {
    //         if(timeout.current) {
    //             clearTimeout(timeout.current)
    //         }
    //     }

    // }, [current, length])

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


    return (
        <section className='HeroSection'>
            <div className='HeroWrapper'>
                {slides.map((slide, index) => {
                    return (
                        <div className='HeroSlide' key={index}>
                            {index === current && (
                            <div className='HeroSlider'>
                                <img className='HeroImage' src={slide.image} alt={slide.alt}/>
                                <div className='HeroContent'>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <button className='Button' to={slide.path} primary='true' css={`max-width: 160px`}>
                                        {slide.label}
                                        <IoMdArrowRoundForward className='Arrow' />
                                    </button>
                                </div>
                            </div>
                            )}

                        </div>
                    )
                })}
                <div className='SliderButtons'>
                    <IoArrowBack className='PrevArrow' onClick={prevSlide}/>
                    <IoArrowForward className='NextArrow' onClick={nextSlide}/>
                </div>
            </div>
        </section>
    )
}

export default Hero