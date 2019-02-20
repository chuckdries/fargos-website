import React from "react";
import { Link } from "gatsby";

const FrontPagePost = ({ post }) => (
  <li>
    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    <p>{post.excerpt}</p>
  </li>
);

export default FrontPagePost;
