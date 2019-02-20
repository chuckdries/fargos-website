import React from "react";
import FrontPagePost from "./FrontPagePost";

const FrontPageSection = ({ posts, title }) => (
  <div>
    <h3>{title}</h3>
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
  </div>
);

export default FrontPageSection;
