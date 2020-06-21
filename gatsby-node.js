const { createFilePath } = require("gatsby-source-filesystem")
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    console.log('filePath', value)
    createNodeField({
      name: "slug",
      node,
      value:  `${value}`,
    })
    createNodeField({
      name: "type",
      node,
      value: value.split('/')[1]
    })
  }
}

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug,
              type
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const markdowns = result.data.allMdx.edges

  // you'll call `createPage` for each result
  markdowns.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/posts-page-layout.js`),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        test: 'hey there',
        type: node.fields.type
      },
    })
  })
}