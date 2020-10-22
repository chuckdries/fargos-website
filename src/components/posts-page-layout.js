import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../components/header";

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate(props) {
  const {
    data: { mdx },
    pageContext,
  } = props;
  console.log("ctx", pageContext);
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Header />
      <h1 style={{ marginLeft: ".5em" }}>{mdx.frontmatter.title}</h1>
      <div className="post-container">
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
