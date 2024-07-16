// components/RightSide/RightSide.jsx
import React, { useState } from "react";
import "./RightSide.css";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import MynCoin from "../MyntraCoin/MynCoin";

const RightSide = ({ postShareTrigger }) => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      <MynCoin postShareTrigger={postShareTrigger} />
      <TrendCard trigger={postShareTrigger} />
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <button
        className="button r-button"
        onClick={() => {
          window.location.href = `${process.env.REACT_APP_URL}/orders`;
        }}
      >
        Create Order
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
