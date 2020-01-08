import { createStore, combineReducers } from "redux";
import templateReducer from "./template-reducer";

let reducers = combineReducers({
    templatesPage: templateReducer
});

let store = createStore(reducers);

window.store = store;
export default store;