// components/MyntraCoin/MynCoin.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoins } from "../../actions/CoinAction";
import "./MynCoin.css";
import coin from "../../img/coin.png";

const MynCoin = ({ postShareTrigger }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { coins } = useSelector((state) => state.userCoinsReducer);

  useEffect(() => {
    dispatch(getCoins(user._id));
  }, [dispatch, user._id, postShareTrigger]);

  return (
    <div className="wallet">
      <div className="coin-section">
        <img src={coin} alt="Coin" className="coin-img" />
        <h3>
          Myn<span className="coin">Coin</span>
        </h3>
      </div>
      <span className="coin-count">{coins}</span>
    </div>
  );
};

export default MynCoin;
