import { SET_CATEGORIES, SET_LOADING } from "../actionTypes";
// const baseUrl = " p3-challenge-1-production-2041.up.railway.app";
const baseUrl = "http://localhost:3000/category";

const setCategories = (payload) => {
  return {
    type: SET_CATEGORIES,
    payload,
  };
};

const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    payload,
  };
};

const fetchCategories = () => {
  return (dispatch) => {
    fetch(baseUrl + "/category")
      .then((res) => {
        if (!res.ok) {
          throw { msg: "error" };
        }
        return res.json();
      })
      .then((categories) => {
        dispatch(setCategories(categories));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setLoading(true));
      });
  };
};

export { setCategories, fetchCategories };
