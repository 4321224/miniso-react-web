import {useDispatch} from 'react-redux'
import {deleteCategory} from '../stores/action/categoriesAction'


function TableRowCategory(props) {
    const dispatch = useDispatch()
    const deleteHandler = async() => {
        dispatch(deleteCategory(id))
    }

        const {no, category} = props
        const {name, createdAt, updatedAt, id} = category

        return (
            <tr>
                <th>{no +1}</th>
                <td>{name}</td>
                <td>{createdAt}</td>
                <td>{updatedAt}</td>
                <button onClick={deleteHandler}>Delete</button>
            </tr>
        )
    
}
export default TableRowCategory;
