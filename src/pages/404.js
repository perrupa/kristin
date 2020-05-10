import React from "react"
import { SEO, Layout } from "../components"

const title = "404: Not found"

const NotFoundPage = () => (
  <Layout title={title}>
    <SEO title={title} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
