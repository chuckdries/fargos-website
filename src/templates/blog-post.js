import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
// import { rhythm, scale } from "../utils/typography"

const PostTitle = styled.h1`
  font-size: 1.5em;
  margin-bottom: 0;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const section = this.props.location.pathname.split("/")[1];

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div style={{ marginLeft: "120px" }}>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <p
            style={{
              // ...scale(-1 / 5),
              marginTop: 0,
              display: `block`
              // marginBottom: rhythm(1),
              // marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date} &bull; {section}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              // marginBottom: rhythm(1),
              marginTop: "3em"
            }}
          />
          {/* <Bio /> */}

          {/* <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul> */}
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
