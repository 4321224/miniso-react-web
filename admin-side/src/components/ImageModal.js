import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, setProductId } from "../stores/action/productAction";

const ImageModal = ({ id, cars }) => {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setProductId(id));
  }, [id]);
};

useEffect(() => {
  dispatch(fetchProduct());
}, []);

const image = product?.Images ?? [0];
console.log(image[0].imgUrl, "ini dari gambar ");

return (
  <>
    <input type="checkbox" id="my-modal-image" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <div className="flex flex-col max-w-4xl w-full h-auto">
          <img src={product.mainImg} alt={product.name} />

          {/* IMG KECIL DI BAWAH */}
          <div className="flex flex-row mt-4 gap-x-2 justify-evenly">
            {/* IMG 1 */}
            <img src={image[0]?.imgUrl} alt={product.name} className="w-1/4" />

            {/* IMG 2 */}
            <img src={image[1]?.imgUrl} alt={product.name} className="w-1/4" />

            {/* IMG 3 */}
            <img src={image[2]?.imgUrl} alt={product.name} className="w-1/4" />
          </div>
          {/* END IMG KECIL DI BAWAH */}
        </div>
        <div className="modal-action justify-center">
          <label
            htmlFor="my-modal-image"
            className="btn bg-orange-500 hover:bg-orange-400 border-none"
          >
            Close
          </label>
        </div>
      </div>
    </div>
  </>
);

export default ImageModal;
