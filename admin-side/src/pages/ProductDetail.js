import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Table, Row } from "react-bootstrap";
import { productDetailById } from "../stores/action/productAction";

function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { productDetail } = useSelector((state) => {
    return state.productReducer;
  });

  const ProductImage = productDetail?.Images ?? [0];
  console.log(ProductImage, "ini product images");
  useEffect(() => {
    dispatch(productDetailById(id));
  }, []);

  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default ProductDetail;
