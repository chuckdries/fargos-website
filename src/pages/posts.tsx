import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

const PostsList = props => {
  const { edges: posts } = props.data.allMdx
  console.log("post props", posts)
  return (
    <Layout>
      <SEO title="All Posts" />
      <ul>
        {posts.map(({node}) => (
          <div>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </ul>
      <p>hello world</p>
    </Layout>
  )
}

export const query = graphql`
  query PostsList {
    allMdx(filter: {fields: {slug: {regex: "^/posts/.+/"}}}) {
      edges {
        node {
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default PostsList
