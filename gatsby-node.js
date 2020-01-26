const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const markdownPosts = `
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
          draft
          slug
          ingredients
        }
      }
    }
  }
}
`

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions: { createPage } }) => {
  const blogPostTemplate = path.resolve("src/templates/blog-post.js")
  const recipeTemplate = path.resolve("src/templates/recipe.js")

  return graphql(markdownPosts).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const recipes = result.data.allMarkdownRemark.edges.filter(
      ({ node }) => node.frontmatter.ingredients
    )

    const blogPosts = result.data.allMarkdownRemark.edges.filter(
      ({ node }) =>
        !node.frontmatter.draft && node.frontmatter.ingredients === null
    )

    recipes.forEach(({ node }) => {
      console.info("recipe", node)

      createPage({
        path: `/recipes/${node.frontmatter.slug}`,
        component: recipeTemplate,
        slug: node.frontmatter.slug,
        context: {},
      })
    })

    blogPosts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path || `/posts/${node.frontmatter.title}`,
        component: blogPostTemplate,
        slug: node.frontmatter.slug,
        context: {},
      })
    })
  })
}
