import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import style from "./header.css";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const HeaderImage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "fargo-dirt.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      className={style["gatsby-image-wrapper"]}
      style={{
        backgroundPosition: "right bottom"
        // color: "transparent"
      }}
      fluid={data.file.childImageSharp.fluid}
    >
      {children}
    </BackgroundImage>
  );
};

export default HeaderImage;
