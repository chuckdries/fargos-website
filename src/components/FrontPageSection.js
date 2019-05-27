import React from "react";
import { Link } from "gatsby";
import FrontPagePost from "./FrontPagePost";
import styled from "styled-components";

const FrontPageSectionBase = styled.section`
  display: flex;
`;

const FrontPageSectionHeader = styled.h3`
  flex-shrink: 0;
  width: 120px;
  text-align: right;
  padding-right: 0.5em;
  /* font-weight: normal; */
  font-size: 1em;
  /* font-style: italic; */
  a {
    color: black;
    /* font-style: italic; */
  }
`;

const FrontPageSectionList = styled.ul`
  padding-left: 0;
`;

const FrontPageSection = ({ posts, title }) => (
  <FrontPageSectionBase>
    <FrontPageSectionHeader>
      <Link to={title}>{title}</Link>
    </FrontPageSectionHeader>
    <FrontPageSectionList>
      {posts.map(post => {
        return (
          // <div key={`${post.frontmatter.title}:${post.frontmatter.date}`}>
          //   <h4>{post.frontmatter.title}</h4>
          //   <a href={post.fields.slug}>{post.fields.slug}</a>
          //   {post.frontmatter.date}
          // </div>
          <FrontPagePost post={post} />
        );
      })}
    </FrontPageSectionList>
  </FrontPageSectionBase>
);

export default FrontPageSection;
