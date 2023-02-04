import {deleteProduct, productDetailById} from '../stores/action/productAction'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'


function TableRowProduct(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleDelete = () => {
        dispatch(deleteProduct(id))
    }

const handleEdit = (event, id) => {
    event.preventDefault();
    dispatch(productDetailById(id))
    navigate(`/editProduct/${id}`)
}

    const {no, product} = props
    const {id, name, description, category, price, createdBy, mainImg} = product


    return(
      <tr className="align-items-center">
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
        {no + 1}
      </th>
      <td className="align-middle">{name}</td>
      <td className="align-middle">{category.name}</td>
      <td className="align-middle">
        <i className="align-middle">{price}</i>
      </td>
      <td className="align-middle">
        <i className="align-middle">{createdBy}</i>
      </td>
      <td className="align-middle">
        <div className="items-center w-40 rounded">
          <img src={mainImg} alt={name} style={{ height: "8rem" }} />
        </div>
      </td>
      <td className="align-middle">
        <button
          onClick={() => navigate(`/products/${id}`)}
          className="btn btn-dark"
        >
          Images
        </button>
      </td>
      <td className="align-middle">
        <button
          onClick={(event) => handleEdit(event, id)}
          className="btn btn-dark"
        >
          Edit
        </button>
        <button onClick={handleDelete} className="btn btn-dark">
          Delete
        </button>
      </td>
    </tr>
    )
}

export default TableRowProduct