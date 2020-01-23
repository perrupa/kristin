/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const markdownPosts = `
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
          draft
        }
        fields {
          slug
        }
      }
    }
  }
}
`

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const recipeTemplate = path.resolve(`src/templates/blog-post.js`)
  return graphql(markdownPosts).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const recipes = result.data.allMarkdownRemark.edges.filter(
      ({ node }) => node.frontmatter.ingredients
    )

    const blogPosts = result.data.allMarkdownRemark.edges.filter(
      ({ node }) => !node.frontmatter.draft && !node.frontmatter.ingredients
    )

    recipes.forEach(({ node }) => {
      createPage({
        path: `/recipes/${node.frontmatter.title}`,
        component: recipeTemplate,
        slug: node.fields.slug,
        context: {},
      })
    })

    blogPosts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path || `/posts/${node.frontmatter.title}`,
        component: blogPostTemplate,
        slug: node.fields.slug,
        context: {},
      })
    })
  })
}
