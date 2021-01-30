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
      <SEO title="All Posts" />
      <Header />
      <ul>
        {posts.map(({node}) => (
          <div>
            <Link target={node.frontmatter.externalLink ? '_blank' : undefined} to={node.frontmatter.externalLink || node.fields.slug}>{node.frontmatter.title}</Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </ul>
      <p>hello world</p>
    </Layout>
  )
}

export const query = graphql`
  query PoemsList {
    allMdx(filter: {fields: {slug: {regex: "^/poems/.+/"}}}) {
      edges {
        node {
          excerpt
          frontmatter {
            title,
            externalLink
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
