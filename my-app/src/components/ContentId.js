import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productDetail } from "../stores/actions/productAction";
// import {productReducer} from "../stores/reducers/productReducer"

function ContentId() {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const  detailProduct  = useSelector((state) => {
    console.log(state);
    return state.productReducer;
  });
  console.log(detailProduct.productDetail, "ini detail");
  useEffect(() => {
    dispatch(productDetail(id));
  }, []);

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-5">
            <div className="main-img">
              <img className="img-fluid" src={detailProduct.productDetail.mainImg} />
            </div>
          </div>
          <div className="col-md-7">
            <div className="main-description px-2">
              <h2 className="text-uppercase">{detailProduct.productDetail.name}</h2>
              <p>{detailProduct.productDetail.descriptions}</p>
              <ul className="prod-detail">
                <li>
                  <p>
                    <strong>Price:</strong> {detailProduct.productDetail.price}
                  </p>
                </li>
              </ul>
              <div className="buttons d-flex my-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentId;
