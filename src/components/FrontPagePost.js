import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

const FrontPageLi = styled.li`
  list-style: none;
`

const FrontPagePostLink = styled(Link)`
  text-decoration: italic;
`

const FrontPagePostExcerpt = styled.p`

`

const FrontPagePost = ({ post }) => (
  <FrontPageLi>
    <FrontPagePostLink to={post.fields.slug}>{post.frontmatter.title}</FrontPagePostLink>
    <FrontPagePostExcerpt>{post.excerpt}</FrontPagePostExcerpt>
  </FrontPageLi>
);

export default FrontPagePost;
