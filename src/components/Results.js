import { useState } from "react";
import axios from "axios";

const Results = ({ results }) => {
    const [id, setId] = useState(null);

    const deleteItem = (id) => {
        axios.delete(`https://c01yiahobi.execute-api.ap-northeast-1.amazonaws.com/dev/dynamo/${id}`)
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err);
            alert("err!");
        });
    }

    return (
        <>
            { results.items.map((item, index) =>
                <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
                    <p className="m-0">{item.value}</p>
                        <button onClick={() => deleteItem(item.id)} className="
                        bg-gray-300
                        border-0
                        p-2
                        rounded-md
                        hover:bg-gray-400
                        hover:text-white" type="submit">削除</button>
                </div>
            )}
        </>
    );
};

export default Results;