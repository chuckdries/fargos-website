import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Header = styled.header`
  margin-left: 120px;
  display: flex;
  flex-direction: column;
  /* overflow: auto; */
  /* display: flex; */
    /* padding: 0; */
  h1 {
    font-size: 1em;
    font-weight: normal;
    margin: 16px 0;
  }
  h2 {
    font-size: 1em;
    font-weight: normal;
    margin: 16px 0;
  }
`;
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;
    console.log('location', location);
    header = (
      <>
        <h1>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              overflow: 'auto'
            }}
            to={rootPath}
          >
            {location.pathname !== rootPath &&
              <span
                style={{
                  position: 'absolute',
                  marginLeft: '-15px',
                  color: 'grey'
                }}
              >&#9664;</span>}{title}
          </Link>
        </h1>
        <h2>Writer and performance artist</h2>
      </>
    );
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: "800px",
          lineHeight: "1.6",
          paddingTop: "2em"
          // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header>{header}</Header>
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    );
  }
}

export default Layout;
