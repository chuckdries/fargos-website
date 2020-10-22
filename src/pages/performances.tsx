import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/header'
import { graphql, Link } from "gatsby"

const PostsList = props => {
  const { edges: posts } = props.data.allMdx
  console.log("post props", posts)
  return (
    <Layout>
      <SEO title="All Performances" />
      <Header />
      <ul>
        {posts.map(({node}) => (
          <div>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query PerformancesList {
    allMdx(filter: {fields: {slug: {regex: "^/performances/.+/"}}}) {
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
