// actions/orderActions.js
import * as OrderApi from "../api/OrderRequests";

export const FETCH_UNPOSTED_ORDERS_REQUEST = "FETCH_UNPOSTED_ORDERS_REQUEST";
export const FETCH_UNPOSTED_ORDERS_SUCCESS = "FETCH_UNPOSTED_ORDERS_SUCCESS";
export const FETCH_UNPOSTED_ORDERS_FAILURE = "FETCH_UNPOSTED_ORDERS_FAILURE";

export const getUnpostedOrders = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_UNPOSTED_ORDERS_REQUEST });

  try {
    const { data } = await OrderApi.getUnpostedOrders(userId);
    dispatch({ type: FETCH_UNPOSTED_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_UNPOSTED_ORDERS_FAILURE, payload: error.message });
  }
};
