import React, { useEffect, useState } from "react";
import "./TrendCard.css";

const TrendCard = ({ trigger }) => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetch("/trend/gettrends")
      .then((response) => response.json())
      .then((data) => {
        const sortedTrends = data.sort((a, b) => b.shares - a.shares);
        const limitedTrends = sortedTrends.slice(0, 5);
        setTrends(limitedTrends);
      })
      .catch((error) => console.error("Error fetching trends:", error));
  }, [trigger]);

  // Function to format numbers
  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + "B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  };

  return (
    <div className="TrendCard">
      <h3>
        Trend Watch: <span className="top5">Top 5</span>
      </h3>
      {trends.map((trend, index) => (
        <div className="trend" key={index}>
          <span>{trend.name}</span>
          <span>{formatNumber(trend.shares)} shares</span>
        </div>
      ))}
    </div>
  );
};

export default TrendCard;
