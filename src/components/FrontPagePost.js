import React from "react";

const FrontPagePost = ({ post }) => (
  <li>
    <a href={post.fields.slug}>{post.frontmatter.title}</a>
    <p>{post.excerpt}</p>
  </li>
);

export default FrontPagePost;
