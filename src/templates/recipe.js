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

const Ingedient = HeaderDate.withComponent(li)

export default ({ data }) => {
  const post = data.markdownRemark
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
        <Ingedients>
          {ingredients.map(ingredient => (
            <Ingedient>{ingredient}</Ingedient>
          ))}
        </Ingedients>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       excerpt(pruneLength: 160)
//       frontmatter {
//         date(formatString: "DD MMMM, YYYY")
//         path
//         title
//         ingredients
//       }
//       fields {
//         readingTime {
//           text
//         }
//       }
//     }
//   }
// `
