import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import OrderForm from "./pages/Orders/order";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div
      className="App"
      style={{
        height:
          window.location.href === `${process.env.REACT_APP_URL}/chat`
            ? "calc(100vh - 2rem)"
            : "auto",
      }}
    >
      <div
        className="blur"
        style={{ top: "-18%", right: "0", background: "#ff7f9d" }}
      ></div>
      <div
        className="blur"
        style={{ top: "36%", left: "-8rem", background: "#ff7f9d" }}
      ></div>
      <div
        className="blur"
        style={{
          top: "70%",
          right: "0",
          background: "#ffaa5b",
        }}
      ></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="/orders"
          element={user ? <OrderForm /> : <Navigate to="../auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
