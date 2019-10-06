import React from "react";
import { graphql } from "gatsby";
import * as R from "ramda";
import styled from "styled-components";

import FrontPageHeader from "../components/FrontPageHeader";
import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FrontPageSection from "../components/FrontPageSection";

const getSection = slug => slug.split("/")[1];

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    console.log(data.site.siteMetadata.frontPageCategories);
    const posts = data.allMarkdownRemark.edges;
    console.log(posts);
    const { poetry, performance, ...otherCategories } = R.pipe(
      R.map(R.prop("node")),
      R.groupBy(
        R.pipe(
          R.path(["fields", "slug"]),
          getSection
        )
      )
    )(posts);

    console.log(otherCategories);

    return (
      <>
        <FrontPageHeader />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="Home"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <FrontPageSection posts={poetry} title="Poetry" />
          <FrontPageSection posts={performance} title="Performance" />
          {R.map(
            cat => (
              <FrontPageSection posts={otherCategories[cat]} title={cat} />
            ),
            R.keys(otherCategories)
          )}
        </Layout>
      </>
    );
  }
}

export default BlogIndex;

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
