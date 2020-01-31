import React from "react"
import { SEO, Layout, LandingBio } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <LandingBio />
  </Layout>
)

export default IndexPage
