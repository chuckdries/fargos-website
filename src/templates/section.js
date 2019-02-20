import React from "react";
import { Link, graphql } from "gatsby";
import * as R from "ramda";
import Layout from "../components/layout";
import FrontPageSection from "../components/FrontPageSection";

class sectionPage extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
      .filter(({ node }) =>
        node.fields.slug.startsWith(this.props.pageContext.slug)
      )
      .map(({ node }) => node);
    console.log(posts);
    return (
      <Layout
        location={this.props.location}
        title={this.props.data.site.siteMetadata.title}
      >
        <FrontPageSection
          posts={posts}
          title={this.props.pageContext.slug.split("/")[1]}
        />
      </Layout>
    );
  }
}

export default sectionPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
