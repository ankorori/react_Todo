import { deleteItem } from "../api/invokeApi";
import { useNavigate } from 'react-router-dom';


const DeleteBtn = ({ id }) => {
    const navigate = useNavigate();

    const handleDelete = (e) => {
        deleteItem(id).then(navigate('/DashBoard')).catch((error) => {
            console.error(error);
        });
    };

    return (
        <button onClick={handleDelete}
            className="
                bg-gray-300
                border-0
                p-2
                rounded-md
                hover:bg-gray-400
                hover:text-white" type="submit">削除
        </button>
    )
}

export default DeleteBtn;