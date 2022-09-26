import { combineReducers } from "redux";
import { productsReducer, searchQueryReducer, filterQueryReducer } from "./products/reducers/productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  query: searchQueryReducer,
  filter: filterQueryReducer,
});
export default reducers;
