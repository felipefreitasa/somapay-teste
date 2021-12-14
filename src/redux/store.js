import { createStore } from "redux";
import rootreducer from "./rootReducer";

const store = createStore(rootreducer);

export default store;