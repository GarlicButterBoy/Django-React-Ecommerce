import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from "redux-toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({});
const initialState = {};

const middleware = [thunk];

const store = configureStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export function configureStore(reducer, initialState composeWithDevTools(applyMiddleware(...middleware))) {
    return createStoreWithMiddleware(rootReducer, initialState);
};
