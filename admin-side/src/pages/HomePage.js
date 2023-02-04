import TableProduct from "../components/TableProduct";
import { useNavigate } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../stores/action/productAction";
import { fetchCategory } from "../stores/action/categoriesAction";

function HomePage() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => {
    console.log(state, "ini dari home");
    return state.products;
  });
  const { categories } = useSelector((state) => {
    console.log(state, "ini kategori dari home");
    return state.categories;
  });

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  useEffect(() => {
    dispatch(fetchCategory());
  });
  return (
    <>
      <TableProduct products={products} companies={companies} />
    </>
  );
}

export default HomePage;
