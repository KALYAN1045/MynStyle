import React, { useState } from "react";
import PostSide from "../components/PostSide/PostSide";
import ProfileSide from "../components/profileSide/ProfileSide";
import RightSide from "../components/RightSide/RightSide";
import "./Home.css";

const Home = () => {
  const [trigger, setTrigger] = useState(false);

  const handlePostShare = () => {
    setTrigger(!trigger);
  };

  return (
    <div className="Home">
      <ProfileSide />
      <PostSide onPostShare={handlePostShare} />
      <RightSide trigger={trigger} />
    </div>
  );
};

export default Home;
