import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducer/productReducer";
import categoryReducer from "./reducer/categoriesReducer";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
});

const middlewares = applyMiddleware(thunk);
const store = createStore(rootReducer, middlewares);

export default store;
