import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Content, SEO, Layout } from "../components"
import styled from "@emotion/styled"

const OuterContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  padding-left: 1em;
  background-color: #b2ffff;
  color: #333;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
`

const NameHeader = styled.h1`
  font-size: 6.5rem;
  margin-bottom: 0;
`

const Description = styled.p`
  font-size: 2.4rem;
  max-width: 50%;
  line-height: 0.9;
  font-weight: 700;
  padding: 0;
  margin-bottom: 1rem;
`

const title = "Home"

export const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <Layout title={title}>
        <SEO title={title} keywords={["gatsby", "application", "react"]} />
        <OuterContainer>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
        </OuterContainer>
      </Layout>
    )}
  />
)

export default IndexPage
