import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ marginLeft: '2em' }}>
      <h1>404: Not Found</h1>
      <p>Il semble que vous vous êtes perdu en chemin !</p>
    </div>
    
  </Layout>
)

export default NotFoundPage
