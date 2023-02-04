import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProduct from "./CardProduct";
import { fetchProduct } from "../stores/actions/productAction";
import { Container } from "react-bootstrap";
import React from "react";

function Content() {
  const { products } = useSelector((state) => {
    console.log(state);
    return state.productReducer;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <>
    <Container col-md-9 ms-sm-auto col-lg-10 px-md-4>
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      {products.map((product) => {
        return <CardProduct product={product} key={product.id} />;
      })}
    </div>

    </Container>
    </>
    // <div className="grid grid-cols-4 gap-4">{JSON.stringify(product)}</div>
    // seharusnya template disini
    // <h1> Product <h1>
  );
}

export default Content;
