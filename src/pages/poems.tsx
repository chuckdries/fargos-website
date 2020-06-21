import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link, PageProps } from "gatsby"

const PoemsList: React.FC<PageProps> = props => {
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
  query PoemsList {
    allMdx(filter: {fields: {type: {eq: "posts"}}}) {
      edges {
        node {
          excerpt
          frontmatter {
            title,
            foo
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default PoemsList
