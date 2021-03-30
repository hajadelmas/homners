

import React, {useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//GSAP
import { gsap } from "gsap";
import { ScrollTrigger, Scrollbar } from "gsap/ScrollTrigger";
import { document, window } from 'browser-monads'


import Header from "./header"
import Footer from "./Footer"


const Layout = ({ children }) => {

gsap.registerPlugin(ScrollTrigger);





  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
