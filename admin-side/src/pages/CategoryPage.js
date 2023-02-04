import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../stores/action/categoriesAction";

const CategoryPage = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return <></>;
};

export default CategoryPage;
