// Home.jsx
import React, { useState } from "react";
import PostSide from "../components/PostSide/PostSide";
import ProfileSide from "../components/profileSide/ProfileSide";
import RightSide from "../components/RightSide/RightSide";
import "./Home.css";

const Home = () => {
  const [postShareTrigger, setPostShareTrigger] = useState(false);

  const handlePostShare = () => {
    setPostShareTrigger((prev) => !prev);
  };

  return (
    <div className="Home">
      <ProfileSide />
      <PostSide onPostShare={handlePostShare} />
      <RightSide postShareTrigger={postShareTrigger} />
    </div>
  );
};

export default Home;
