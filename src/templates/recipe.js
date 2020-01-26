import React from "react"
import styled from "@emotion/styled"
// import { graphql } from "gatsby"
import { Layout, Content, SEO, MarkdownContent } from "../components"

const HeaderDate = styled.h3`
  margin-top: 10px;
  color: #606060;
`

const Ingedients = styled.ul`
  border-left: 5px solid #eee;
  padding-left: 2em;
`

const Ingedient = HeaderDate.withComponent("li")

export default props => {
  const { data = {} } = props
  const post = data.markdownRemark || { frontmatter: {} }
  const {
    frontmatter: { ingredients = [], title = "", description, date },
    excerpt,
    html,
  } = post

  console.log("props", props)

  console.log(data)

  return (
    <Layout>
      <SEO title={title} description={description || excerpt} />
      <Content>
        <h1>{title}</h1>

        <HeaderDate>
          {date} - {getReadingTime(post)}
        </HeaderDate>

        <Ingedients>
          {ingredients.map(ingredient => (
            <Ingedient>{ingredient}</Ingedient>
          ))}
        </Ingedients>

        <MarkdownContent dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
    </Layout>
  )
}

const getReadingTime = ({ fields } = {}) =>
  fields && fields.readingTime && fields.readingTime.text

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
        ingredients
        slug
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
