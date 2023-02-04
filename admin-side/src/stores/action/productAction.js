import {
  SET_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FIND_ONE_PRODUCT,
} from "../actionType";

const baseUrl = "http://localhost:3001";

function setProducts(payload) {
  return {
    type: SET_PRODUCT,
    payload,
  };
}

const fetchProduct = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/product`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const data = await response.json();
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
};

function setProductsAdd(payload) {
  return {
    type: ADD_PRODUCT,
    payload,
  };
}

const addProduct = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(data),
      });
      const product = await response.json();
      dispatch(setProductsAdd(product));
      dispatch(fetchProduct());
    } catch (error) {
      console.log(error);
    }
  };
};

function setProductsDelete(id) {
  return {
    type: DELETE_PRODUCT,
  };
}

const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`${baseUrl}/product/${id}`, {
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

function setProductId(payload) {
  return {
    type: FIND_ONE_PRODUCT,
    payload,
  };
}

const productDetailById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/product/${id}`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (!response.ok) {
        throw { msg: "error" };
      }
      const res = await response.json();
      dispatch(setProductId(res));
    } catch (error) {
      console.log(error);
    }
  };
};

const editProduct = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/product/${payload.id}`, {
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const content = await response.json();
      dispatch(fetchProduct());
    } catch (error) {
      console.log(error);
    }
  };
};

export {
  fetchProduct,
  productDetailById,
  addProduct,
  deleteProduct,
  editProduct,
};
