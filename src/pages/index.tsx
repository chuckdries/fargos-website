import React from "react";
import { Link, graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";

const bio = (
  <>
    <p>
      Fargo Tbakhi (he/him) is a queer Palestinian-american writer and performer
      from Phoenix, Arizona. He is the winner of the 2018 Ghassan Kanafani
      Resistance Arts Scholarship, a Pushcart nominee, and a 2020 Desert Nights,
      Rising Stars fellow. His work is published in Cotton Xenomorph, Mizna,
      Cosmonauts Avenue, Glass: a Journal of Poetry, Peach Mag and elsewhere. He
      tweets <a href="https://twitter.com/YouKnowFargo">@YouKnowFargo</a> and
      probably wants to hold your hand.
    </p>
    <p>
      Fargo is available for workshops and readings. For booking, please email
      details to{" "}
      <a href="mailto:fargotbakhi@gmail.com">fargotbakhi@gmail.com</a>
    </p>
    <p>
      To book <em>My Father, My Martyr, and Me</em>, please include the word
      "performance" in the subject line.
    </p>
  </>
);

const IndexPage: React.FC<PageProps> = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  <Link to="/page-2/">Go to page 2</Link> */}
      <Image>
        {/* <div className="image-children">
        <h1>Fargo Tbakhi</h1>
      </div> */}
        <Header />
        {bio}
      </Image>
      <div className="hide-until-small">
        <Header />
        {bio}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query AllContentList {
    allMdx {
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
`;

export default IndexPage;
