import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchCategories } from "../stores/action/categoriesAction";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../stores/action/productAction";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { category } = useSelector((state) => {
    console.log(state, "masuk");
    return state;
  });

  const { product } = useSelector((state) => {
    console.log(state, "ini dari add product");
    return state;
  });

  const [form, setForm] = useState({
    name: "",
    descriptions: "",
    price: "",
    category: "",
    mainImg: "",
    Image1: "",
    Image2: "",
  });

  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    console.log(event.target, "<<<");
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form, "ini form");
    dispatch(addProduct(form)).then(() => {
      navigate("/");
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <fieldset disabled>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">abc</Form.Label>
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

export default AddProduct;
