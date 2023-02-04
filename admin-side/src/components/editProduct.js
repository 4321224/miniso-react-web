import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchCategories } from "../stores/action/categoriesAction";
import { editProduct } from "../stores/action/productAction";

function EditProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { category } = useSelector((state) => {
    console.log(state, "ini state edit category");
    return state;
  });

  const { productDetail } = useSelector((state) => {
    return state.productReducer;
  });
  // console.log(productDetail, "ini product detail");

  const ProductImage = productDetail?.Images ?? [0];

  useEffect(() => {
    dispatch(fetchCategories());
  });

  setData({
    name: productDetail.name,
    description: productDetail.description,
    price: productDetail.price,
    categoryId: productDetail.categoryId,
    mainImg: productDetail.mainImg,
    images1: ProductImage[0]?.imgUrl,
    images2: ProductImage[1]?.imgUrl,
  });

  const [data, setData] = useState({
    name: productDetail.name,
    description: productDetail.description,
    price: productDetail.price,
    categoryId: productDetail.categoryId,
    mainImg: productDetail.mainImg,
    images1: productDetail.imgUrl,
    image2: productDetail.imgUrl,
  });

  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    let newProduct = {
      ...data,
    };
    newProduct[name] = value;
    setData(newProduct);
  };

  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(editProduct(data, productDetail.id));
    navigate("/");
  };

  return (
    <Form>
      <fieldset disabled>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Can't check this"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
}

export default EditProduct;
