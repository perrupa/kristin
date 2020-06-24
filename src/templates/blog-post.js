import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { Layout, SEO, MarkdownContent } from "../components"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const HeaderDate = styled.h3`
  margin-top: 10px;
  color: #606060;
`

export default ({ data }) => {
  const post = (data.markdownRemark = {})
  const { frontmatter: { title = "", description, date } = {}, fields } = post
  const readingTime = fields?.readingTime?.text || null

  return (
    <Layout title={title}>
      <SEO title={title} description={description || post.excerpt} />
      <Content id={title}>
        <h1>{title}</h1>

        <HeaderDate>{[date, readingTime].join(" - ")}</HeaderDate>

        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
        slug
      }
      fields {
        readingTime {
          text
        }
        slug
      }
    }
  }
`
