import { useState } from "react";
import axios from "axios";

const Form = () => {
    const [item, setItem] = useState("");

    const addItem = (e) => {
        e.preventDefault()
        const requestData = {
            value: item,
        };
        axios.post(`https://c01yiahobi.execute-api.ap-northeast-1.amazonaws.com/dev/dynamo`,requestData)
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err);
            alert("err!");
        });
    }

    return (
        <form onSubmit={addItem}>
            <input className="border-1 rounded-md" type="text" placeholder="memo" onChange={e => setItem(e.target.value)} value={item}/>
            <button className="
                        bg-gray-300
                        border-0
                        p-2
                        rounded-md
                        hover:bg-gray-400
                        hover:text-white" type="submit">add</button>
        </form>
    );
};

export default Form;