import { ActionTypes } from "../constants/action-types";
const intialProductState = {
  products: []
};

const intialQueryState = {
  searchQuery: "",
};

const intialFilterState = {
  filterQuery: "",
};

export const productsReducer = (state = intialProductState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const searchQueryReducer = (state = intialQueryState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SEARCH_QUERY:
      return { ...state, searchQuery: payload };
    default:
      return state;
  }
};

export const filterQueryReducer = (state = intialFilterState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FILTER_QUERY:
      return { ...state, filterQuery: payload };
    default:
      return state;
  }
};
