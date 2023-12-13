import { useState } from "react";
import { addItem } from "../api/invokeApi";

const createId = () => {
    const str = "0123456789abcdefghijklmnopqrstuvwxyz";
    const Length = 32;
    let rundomId = "";
    for (let i = 0; i < Length; i++) {
        let selected = Math.floor(Math.random() * str.length);
        rundomId += str.substring(selected, selected + 1);
    }
    return rundomId;
}

const Form = ({setId}) => {
    const [item, setItem] = useState("");

    return (
        <form onSubmit={(e) => {addItem(e, item); }}>
            <input className="bg-gray-300 border-1 rounded-md p-2 m-2" type="text" placeholder="memo" onChange={e => setItem(e.target.value)} />
            <button onClick={() => setId({createId}) } className="
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