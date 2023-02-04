import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import  productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer"

let rootReducer = combineReducers({
  productReducer,
  categoryReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
