import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../../actions/CoinAction"; // Adjust path as needed
import "./MynCoin.css";
import coin from "../../img/coin.png";

const MynCoin = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { coins, loading, error } = useSelector(
    (state) => state.userCoinsReducer
  ); // Assuming your Redux state structure

  useEffect(() => {
    const userId = user._id;
    dispatch(getCoins(userId));
  }, [dispatch]);

  return (
    <div className="wallet">
      <div className="coin-section">
        <img src={coin} alt="Coin" className="coin-img" />
        <h3>
          Myn<span className="coin">Coin</span>
        </h3>
      </div>
      <span className="coin-count">{coins}</span>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default MynCoin;
