import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const setSearchQuery = (query) => {
  return {
    type: ActionTypes.SET_SEARCH_QUERY,
    payload: query,
  };
};

export const setFilterQuery = (query) => {
  return {
    type: ActionTypes.SET_FILTER_QUERY,
    payload: query,
  };
};
