// reducers/orderReducer.js

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_UNPOSTED_ORDERS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_UNPOSTED_ORDERS_SUCCESS":
      return { ...state, loading: false, orders: action.payload };
    case "FETCH_UNPOSTED_ORDERS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
