import React from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import "./PostSide.css";

const PostSide = ({ onPostShare }) => {
  return (
    <div className="PostSide">
      <PostShare onPostShare={onPostShare} />
      <Posts />
    </div>
  );
};

export default PostSide;
