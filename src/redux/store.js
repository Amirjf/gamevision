import { createStore } from "redux";
import { rootReducer } from "./reducer";

export const appStore = createStore(rootReducer);
