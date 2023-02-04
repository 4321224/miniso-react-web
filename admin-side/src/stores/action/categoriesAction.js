import {
  SET_CATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  FIND_ONE_CATEGORY,
} from "../actionType";

const baseUrl = "p3-challenge-1-production-2041.up.railway.app";

function setCategories(payload) {
  return {
    type: SET_CATEGORY,
    payload,
  };
}

const fetchCategory = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/category`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const data = await response.json();
      dispatch(setCategories(data));
    } catch (error) {
      console.log(error);
    }
  };
};

function setCategoriesAdd(payload) {
  return {
    type: ADD_CATEGORY,
    payload,
  };
}

const addCategory = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/category`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      dispatch(setCategoriesAdd(res));
    } catch (error) {
      console.log(error);
    }
  };
};

function setCategoriesDelete(id) {
  return {
    type: DELETE_CATEGORY,
  };
}

const deleteCategory = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/category/${id}`, {
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

function setCategoryId(payload) {
  return {
    type: FIND_ONE_CATEGORY,
    payload,
  };
}

const categoryId = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/category/${id}`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!response.ok) {
        throw { msg: "error" };
      }
      const res = await response.json();
      dispatch(setCategoryId(res));
    } catch (error) {
      console.log(error);
    }
  };
};

const editCategory = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/category/${payload.id}`, {
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const content = await response.json();
      // dispatch(setCategoriesEdit(content));
      dispatch(fetchCategory());
    } catch (error) {
      console.log(error);
    }
  };
};
// kalo misalnya reusable, ada id nya nggak? kalo ada dia ngediapatch fione kalo nggak di string kosong

export { fetchCategory, categoryId, addCategory, deleteCategory, editCategory };
