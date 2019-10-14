import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Header = ({ siteTitle }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            email
          }
        }
      }
    `
  );
  return (
    <header>
      <h1>
        {/* <Link to="/">{siteTitle}</Link> */}
        {/* {siteTitle} */}
        {site.siteMetadata.title}
      </h1>
      <span>{site.siteMetadata.description}</span>
      <a href={`mailto:${site.siteMetadata.email}`}>
        {site.siteMetadata.email}
      </a>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
