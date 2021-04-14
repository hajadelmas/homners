import React, { useState, useEffect } from 'react'
import { window } from 'browser-monads'
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Dropdown from './Dropdown'


import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";


import './Header.scss'


function Header({ siteTitle }) {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [navbar, setNavbar] = useState(false)
    const [dropdown, setDropdown] = useState(false)


    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    const MouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const MouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    window.addEventListener('resize', showButton)
    
    useEffect(() => {
        showButton()
    }, [])

    

    const changeBackground = () => {
        if(window.scrollY >= 60) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)


    return (
        <>
            <nav className={navbar ? "navbar active" : "navbar"}>
                <div className="navbar-container">
                    <Link to="/" className='navbar-logo-link' onClick={closeMobileMenu}>
                        <StaticImage
                            className='navbar-logo'
                            src="../images/logoHomnersFinal.png"
                            // height={60}
                            // width={55}
                            // quality={100}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="homners logo"
                            style={{ width: `50%` }}
                            />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? FaTimes : FaBars} />
                        { click ? <FaTimes /> : <FaBars /> }
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                NOS SERVICES {button && <FaCaretDown className='CaretDown' />}
                            </Link>
                            {dropdown && <Dropdown />}
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                NOS BIENS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/posts' className='nav-links' onClick={closeMobileMenu}>
                                BLOG
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/partners' className='nav-links' onClick={closeMobileMenu}>
                                NOS PARTENAIRES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact-us' className='nav-links-mobile' onClick={closeMobileMenu}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                    {button && <button className=' btn btn--outline'><Link to='/contact-us'>CONTACT</Link></button>}
                </div>
            </nav>
        </>
    )
  }


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header


