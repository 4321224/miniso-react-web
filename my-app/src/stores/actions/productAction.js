import { SET_PRODUCTS, SET_PRODUCTS_DETAIL, SET_LOADING } from "../actionTypes";
// const baseUrl = "p3-challenge-1-production-2041.up.railway.app";
const baseUrl = "http://localhost:3000/product";
const setProducts = (payload) => {
  return {
    type: SET_PRODUCTS,
    payload,
  };
};

const setProductsDetail = (payload) => {
  return {
    type: SET_PRODUCTS_DETAIL,
    payload,
  };
};

const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading,
  };
};

// const fetchProduct = () => {
//   return (dispatch) => {
//     //   console.log("ini masuk fetch product");
//     fetch("http://localhost:3001/Products")
//       .then((res) => {
//         if (!res.ok) {
//           throw { msg: "error" };
//         }
//         return res.json();
//       })
//       .then((products) => {
//         dispatch(setProducts(products));
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {
//         dispatch(setLoading(true));
//       });
//   };
// };

const fetchProduct = () => {
  // console.log("masuk");
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/Products");
      if (!response.ok) {
        throw { msg: "error" };
      }
      const res = await response.json();
      // console.log(res,"<<<");
      dispatch(setProducts(res));
    } catch (error) {
      console.log(error);
    }
  };
};

// const productDetail = (slug) => {
//   return (dispatch) => {
//     fetch(`http://localhost:3001/detail?slug=${slug}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw { msg: "error" };
//         }
//         return res.json();
//       })
//       .then((data) => {
//         dispatch(setProductsDetail(data));
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {
//         dispatch(setLoading(true));
//       });
//   };
// }

const productDetail = (id) => {
  // console.log("id masuk");
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/Products/${id}`);
      if (!response.ok) {
        throw { msg: "error" };
      }
      const res = await response.json();
      dispatch(setProductsDetail(res));
    } catch (error) {
      console.log(error);
    }
  };
};

export { setProducts, setProductsDetail, fetchProduct, productDetail };
