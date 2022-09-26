import { configureStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  // productList: productListReducer,
  // productDetails: productDetailsReducers,
  // cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];

const initialState = {
    cart: {cartItems: cartItemsFromStorage},
};

const middleware = [thunk];

const store = configureStore({
        reducer: reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))}
);

export default store;
