import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Image from "gatsby-image";
import bgi from "../../content/assets/fargo1.jpg";
import BackgroundImage from "gatsby-background-image";

const BgDiv = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Ultra&display=swap");
  background-image: url(${bgi});
  background-size: cover;
  /* background-clip: text; */
  /* -webkit-background-clip: text; */
  min-width: 100%;
  /* min-height: 500px; */
  background-position: bottom center;
  color: transparent;
  /* color: white; */
`;
const InnerBgDiv = styled.div`
  /* background-image: url(${bgi}); */
  /* background-size: cover; */
  min-width: 100%;
  /* background-position: bottom center; */
  margin: 0;
  /* opacity: 0.5; */
  /* color: transparent; */
  color: white;
  /* color: #111; */
  text-align: right;
  h1 {
    opacity: 0.5;
    font-family: "Ultra", serif;
    font-size: 20vw;
    font-weight: 900;
    /* margin-bottom: 0px; */
    margin: 0;
    /* background: rgba(0,0,0,.5); */
    display: inline-block
  }
  h2 {
    /* padding-bottom: 2em; */
    /* margin-top:0px; */
  }
`;

function Header() {
  return (
    <StaticQuery
      query={headerQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <div>
            <BgDiv
            // fixed={data.headerPic.childImageSharp.fluid}
            // alt={author}
            // imgStyle={
            //   {
            //     // borderRadius: `50%`
            //   }
            // }
            >
              <InnerBgDiv>
                <h1>{author}</h1>
                <h2>writer - performance artist - he/him</h2>
              </InnerBgDiv>
            </BgDiv>
            {/* <BioText>Writer and performance artist</BioText> */}
            {/* <p>
              <strong>{author}</strong>
              {/* {` `}
              <a href={`https://twitter.com/${social.twitter}`}>
                You should follow him on Twitter
              </a> */}
          </div>
        );
      }}
    />
  );
}

const headerQuery = graphql`
  query HeaderQuery {
    headerPic: file(absolutePath: { regex: "/fargo1.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Header;
