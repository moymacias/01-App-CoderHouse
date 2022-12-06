import { createStore, combineReducers } from "redux";

import CategoryReducer from "./reducers/category.reducer";
import BreadReducer from "./reducers/breads.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  breads: BreadReducer,
});

export default createStore(RootReducer);
