import { configureStore, combineReducers } from "@reduxredux";
import thunk from "redux-thunk";

const reducer = combineReducers({
  // productList: productListReducer,
  // productDetails: productDetailsReducers,
  // cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];

export const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const middleware = [thunk];

const store = configureStore({
  reducer: reducer,
  preloadState: initialState,
  middleware: middleware,
});

export default store;
