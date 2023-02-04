import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addCategory,
  fetchCategories,
} from "../stores/action/categoriesAction";

function AddCategory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [category, setCategory] = useState({
    name: "",
  });

  const handleChange = (event) => {
    console.log(event.target, "<<< ini event target");
    const {name, value} = event.target
    setCategory({
        ...category,
        [name]: value
    })
  }

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCategory(category)).then(() => {
      navigate("/category");
    });
  };
  return (
    <>
      {/* ini space buat styling */}
      <h1>Create New Category</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
          name="name"
          value={category.name}
          type="text"
          onChange={handleChange}
        disabled />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default AddCategory;
