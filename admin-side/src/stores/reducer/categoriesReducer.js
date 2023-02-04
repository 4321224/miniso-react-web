import { SET_CATEGORY, ADD_CATEGORY, FIND_ONE_CATEGORY } from "../actionType";

const initialState = {
  categories: [],
  category: {},
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case FIND_ONE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload], //?karena nambahin satu category tapi nggak ilangin category sebelumnya
      };
    default:
      return state;
  }
}

export default categoryReducer;
