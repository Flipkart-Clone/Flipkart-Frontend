import axios from "axios";
import * as ActionType from "../constants/cartConstants";

const url = "https://flipkartcloneserver.onrender.com";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/products/${id}`);
    dispatch({ type: ActionType.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: ActionType.ADD_TO_CART_ERROR, payload: error.message });
  }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({type: ActionType.REMOVE_FROM_CART, payload: id})
};
