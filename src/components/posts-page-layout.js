import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Layout from "./layout";

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate(props) {
  const {
    data: { mdx },
    pageContext,
  } = props;
  console.log("ctx", pageContext);
  return (
    <Layout>
      {/* <SEO title="All Posts" /> */}
      <div className="post-container">
        <h1>{mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
