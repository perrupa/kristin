import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { SEO, Layout } from "../components"

export const query = graphql`
  query GetRecipes {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/recipes/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            slug
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`

export const Recipe = ({ data }) => {
  const recipes = data.allMarkdownRemark.edges || []

  return (
    <Layout>
      <SEO title="Recipes" />
      <main>
        <h1>Recipes</h1>

        {recipes.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={`/recipes/${node.frontmatter.slug}`}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </main>
    </Layout>
  )
}

export default Recipe
