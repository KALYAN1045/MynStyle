import React, { useState, useRef, useEffect } from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/UploadAction";
import { getUnpostedOrders } from "../../api/OrderRequests";

const PostShare = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [descText, setDescText] = useState("");
  const desc = useRef();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  // Fetch unposted orders on component mount
  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    // Reset selected order ID if the orders list changes
    if (orders.length > 0) {
      setSelectedOrderId(orders[0]._id);
    } else {
      setSelectedOrderId("");
    }
  }, [orders]);

  const fetchOrders = async () => {
    try {
      const response = await getUnpostedOrders(user._id);
      const fetchedOrders = response.data;
      setOrders(fetchedOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // handle Image Change
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const imageRef = useRef();

  // handle post upload
  const handleUpload = async (e) => {
    e.preventDefault();

    // Check if an order is selected
    if (!selectedOrderId) {
      console.error("No order selected.");
      return;
    }

    // Check if there is text in the input or an image selected
    if (!descText && !image) {
      alert("Please enter a description or select an image to post.");
      return;
    }

    // Post data
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      orderId: selectedOrderId, // Include selected order ID
    };

    // if there is an image with post
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;

      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    console.log(newPost);
    dispatch(uploadPost(newPost));

    // Remove the selected order from the list of unposted orders
    const updatedOrders = orders.filter(
      (order) => order._id !== selectedOrderId
    );
    setOrders(updatedOrders);

    resetShare();
  };

  // Reset Post Share
  const resetShare = () => {
    setImage(null);
    setDescText("");
    desc.current.value = "";
    if (orders.length > 0) {
      setSelectedOrderId(orders[0]._id);
    } else {
      setSelectedOrderId("");
    }
  };

  // Handle change in dropdown selection
  const handleOrderChange = (event) => {
    const orderId = event.target.value;
    console.log(orderId);
    setSelectedOrderId(orderId);
  };

  // Handle description text change
  const handleDescChange = (event) => {
    setDescText(event.target.value);
  };

  if (orders.length === 0) {
    return null; // or return an alternative message, e.g., <p>No unposted orders available.</p>
  }

  return (
    <div className="PostShare">
      <img
        src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        alt="Profile"
      />
      <div>
        <input
          type="text"
          placeholder="What's happening?"
          required
          ref={desc}
          onChange={handleDescChange}
        />
        <select
          className="dropdown"
          value={selectedOrderId}
          onChange={handleOrderChange}
        >
          {orders.map((order) => (
            <option key={order._id} value={order._id} className="Orderoption">
              {order.items.join(", ")}
            </option>
          ))}
        </select>
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>

          <button
            className="button ps-button"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "Uploading" : "Share"}
          </button>

          <div style={{ display: "none" }}>
            <input type="file" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
