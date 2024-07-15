import React, { useState, useEffect } from "react";
import "./RightSide.css";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import MynCoin from "../MyntraCoin/MynCoin";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../../actions/CoinAction"; // Adjust path as needed

const RightSide = ({ trigger }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { coins, loading, error } = useSelector(
    (state) => state.userCoinsReducer
  );

  useEffect(() => {
    dispatch(getCoins(user._id));
  }, [dispatch, user._id, trigger]); // Add trigger to dependency array

  return (
    <div className="RightSide">
      <MynCoin coins={coins} /> {/* Pass coins as prop */}
      <TrendCard trigger={trigger} />
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
