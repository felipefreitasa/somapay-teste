import { createStore } from "redux";
import combineReducers from "./combineReducers";

const store = createStore(combineReducers);

export default store;