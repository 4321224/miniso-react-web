import { SET_PRODUCTS, SET_PRODUCTS_DETAIL } from "../actionTypes";

const initialState = {
  products: [],
  productDetail: {},
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_PRODUCTS_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    default:
      return state;
  }
}

export default productReducer;
