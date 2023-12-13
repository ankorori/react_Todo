import { useEffect } from "react";
import DeleteBtn from "./DeleteBtn"
import UpdateItemForm from "./UpdateItem";
import { getAlldeta } from "../api/invokeApi";

const Results = ({ setLoading, results }) => {
    // useEffect(() => {
    //     getAlldeta(setLoading, setResult);
    // }, []);

    return (
        <>
            { results.items.map((item, index) =>
                <div key={index} className="flex flex-row justify-around items-center">
                    <UpdateItemForm id={item.id} item={item.value}></UpdateItemForm>
                    <div className="basis-1/5">
                        <DeleteBtn id={item.id} setLoading={setLoading}></DeleteBtn>
                    </div>
                </div>
            )}
        </>
    );
};

export default Results;