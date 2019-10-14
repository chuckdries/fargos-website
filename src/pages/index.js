import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";

const IndexPage = () => (
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
    </Image>
    <div className="hide-until-small">
      <Header />
    </div>
  </Layout>
);

export default IndexPage;