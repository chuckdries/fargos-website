import React from "react";
import { Link, graphql } from "gatsby";
import * as R from "ramda";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
// import { rhythm } from "../utils/typography";
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
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <FrontPageSection posts={poetry} title="poetry" />
        <FrontPageSection posts={performance} title="performance" />
        {R.map(
          cat => (
            <FrontPageSection posts={otherCategories[cat]} title={cat} />
          ),
          R.keys(otherCategories)
        )}
      </Layout>
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
