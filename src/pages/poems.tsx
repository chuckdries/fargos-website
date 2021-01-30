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
            <h5 style={{ margin: 0 }}>{node.frontmatter.publication}</h5>
            <Link target={node.frontmatter.externalLink ? '_blank' : undefined} to={node.frontmatter.externalLink || node.fields.slug}><h2 style={{ margin: '0 0 5px 0'}}>{node.frontmatter.title}</h2></Link>
            <p style={{margin: 0}}>{node.excerpt}</p>
          </div>
        ))}
      </ul>
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
            publication,
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
