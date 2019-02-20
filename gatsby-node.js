const path = require(`path`);
const R = require("ramda");
const { createFilePath } = require(`gatsby-source-filesystem`);

const getSection = slug => slug.split("/")[1];

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const sectionPage = path.resolve("./src/templates/section.js");
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next
        }
      });
    });

    // create category pages
    const categories = R.uniq(
      R.map(R.path(["node", "frontmatter", "category"]), Object.values(posts))
    );

    // create section pages
    const sections = R.uniq(
      R.map(
        R.pipe(
          R.path(["node", "fields", "slug"]),
          getSection
        ),
        posts
      )
    );

    sections.forEach(section => {
      createPage({
        path: `/${section}`,
        component: sectionPage,
        context: {
          slug: `/${section}`
        }
      });
    });

    // categories.forEach(category => {
    //   createPage({

    //   })
    // });

    // const categories = R.pipe(
    //   R.map(R.prop("node")),
    //   R.groupBy(R.path(["frontmatter", "category"]))
    // )(posts)
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
