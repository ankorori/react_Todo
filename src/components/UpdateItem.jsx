import { updateItem } from "../api/invokeApi";

const UpdateItemForm = ({ id, item }) => {
    return (
        <input className="bg-gray-300 border-1 rounded-md p-2 m-2 basis-4/5" type="text" defaultValue={item} onBlur={(e)=>updateItem(id, e.target.value)}/>
    )
}

export default UpdateItemForm;