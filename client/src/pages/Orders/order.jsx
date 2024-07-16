import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import "./order.css";

const OrderForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [items, setItems] = useState("");
  const [orderLink, setOrderLink] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const newOrder = {
      userId: user._id,
      items: items.split(",").map((item) => item.trim()),
      orderLink,
    };

    try {
      await axios.post(
        `${import.meta.env.REACT_APP_BASE_URL}/orders`,
        newOrder
      );
      setSuccess("Order successfully created!");

      setTimeout(() => {
        setSuccess(null);
      }, 3000);

      setItems("");
      setOrderLink("");
    } catch (err) {
      setError("Failed to create order. Please try again.");
    }
  };

  return (
    <div className="OrderForm">
      <Link to="/home" className="back-arrow">
        &#8592; Back
      </Link>
      <div className="form-container">
        <h2>
          Create <span className="no">New Order</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="items">Item:</label>
            <input
              type="text"
              id="items"
              value={items}
              onChange={(e) => setItems(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="orderLink">Order Link:</label>
            <input
              type="text"
              id="orderLink"
              value={orderLink}
              onChange={(e) => setOrderLink(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            Submit Order
          </button>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
