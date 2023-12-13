import { updateItem } from "../api/invokeApi";
import React, { useState } from 'react';

const UpdateItemForm = ({ id, item }) => {
    const [error, setError] = useState(null);
    const [memo, setMemo] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);

    const handleUpdeta = (e) => {
        updateItem(id, memo).then().catch((error) => {
            console.error(error);
            setError("エラーが発生しました。");
            setIsUpdate(false);
            return;
        });
        setIsUpdate(false);
    };

    const handleIsUpdeta = () => {
        setIsUpdate(true);
    };

    return (
        <form>
            { isUpdate ?
                <>
                <input className="bg-gray-300 border-1 rounded-md p-2 m-2 basis-3/5" type="text" defaultValue={item} onChange={(e) => setMemo(e.target.value)} />
                <button className="
                basis-1/5
                bg-red-300
                border-0
                p-2
                rounded-md
                hover:bg-red-400
                hover:text-white" type="button" onClick={handleUpdeta}>更新</button>
                </>
                :
                <>
                <div className="flex">
                <div className="bg-gray-300 border-1 rounded-md p-2 m-2 basis-3/5">{item}</div>
                <button className="
                basis-1/5
                bg-gray-300
                border-0
                p-2
                rounded-md
                hover:bg-gray-400
                hover:text-white" type="button" onClick={handleIsUpdeta}>更新する</button>
                </div>
                </>
            }
        </form>
    )
}

export default UpdateItemForm;