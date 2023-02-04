import { SET_PRODUCT, ADD_PRODUCT, FIND_ONE_PRODUCT } from "../actionType";

const initialState = {
  products: [],
  product: {},
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case FIND_ONE_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
}

export default productReducer;
