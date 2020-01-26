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
  const post = data.markdownRemark

  console.log(data)

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Content>
        <h1>{post.frontmatter.title}</h1>
        <HeaderDate>
          {post.frontmatter.date} - {post.fields.readingTime.text}
        </HeaderDate>
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
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
