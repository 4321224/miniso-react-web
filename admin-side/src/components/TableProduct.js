import { useDispatch, useSelector } from "react-redux";
import TableRowProduct from "./TableRowProduct";
import TableRowCategory from "./TableRowCategory";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import ImageModal from "../components/ImageModal";
import { fetchProduct } from "../stores/action/productAction";
import { fetchCategories } from "../stores/action/categoriesAction";

function TableProduct(props) {
  const dispatch = useDispatch();
  const { status, head } = props;
  const { products } = useSelector((state) => {
    return state.productReducer;
  });

  const { categories } = useSelector((state) => {
    return state.categoriesReducer;
  });

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProduct());
  }, []);

  let tBody;
  const tHead = head.map((el, i) => {
    return <th key={i + "x"}>{el}</th>;
  });

  if (status === "dashboard") {
    tBody = products.map((el, i) => (
      <TableRowProduct key={el.id} product={el} no={i} />
    ));
  } else {
    tBody = categories.map((el, i) => (
      <TableRowCategory key={el.id} category={el} no={i} />
    ));
  }

  return (
    <>
      <div className="overflow-x-auto px-5 mb-32">
        <h1 className="text-black text-center text-5xl font-extrabold ">
          LIST Product
        </h1>
        <div className="float-right">
          <ButtonProduct
            onClick={() => {
              setEditProduct(null);
            }}
          />
        </div>
        <table className="table w-full border border-black">
          {/* <!-- head --> */}
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Created By</th>
              <th>Main Image</th>
              <th>Images</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {products?.map((product, i) => (
              <TableRowProducts
                product={product}
                i={i}
                onEdit={onEdit}
                key={product.id}
              />
            ))}
          </tbody>
        </table>
      </div>

      <ImageModal id={activeId} products={products} />
      <FormProductModal id={activeId} categories={categories} />
    </>
  );
}

export default TableProduct;
