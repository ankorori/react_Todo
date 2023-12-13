import { deleteItem } from "../api/invokeApi";
import { useTransition } from 'react';

const DeleteBtn = ({ id, setLoading }) => {
    const [isPending, startTransition] = useTransition();
    const handleChange = (e) => {
        startTransition(() => {
            deleteItem(id, setLoading)
        });
    };
    return (
        <button onClick={handleChange}
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