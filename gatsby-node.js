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

const hasIngredients = ({ node }) => node.frontmatter.ingredients
const isBlogPost = ({ node }) => !node.frontmatter.draft && node.frontmatter.ingredients === null


exports.createPages = ({ graphql, actions: { createPage } }) => {
  const BlogPost = path.resolve("src/templates/blog-post.js")
  const Recipe = path.resolve("src/templates/recipe.js")

  const createPageForPathWithTemplate = (path, template) => ({node}) => {
    createPage({
      path: node.frontmatter.path || `/${path}/${node.frontmatter.title}`,
      component: template,
      slug: node.frontmatter.slug,
      context: {},
    })
  };

  return graphql(markdownPosts).then(({errors, data}) => {
    if (errors) {
      return Promise.reject(errors)
    }

    const posts     = data.allMarkdownRemark.edges
    const recipes   = posts.filter(hasIngredients)
    const blogPosts = posts.filter(isBlogPost)

    recipes.forEach(createPageForPathWithTemplate('recipes', Recipe))
    blogPosts.forEach(createPageForPathWithTemplate('posts', BlogPost))
  })
}
