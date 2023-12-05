import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Title from "./components/Title";
import Results from "./components/Results";
import Form from "./components/Form";
import Loading from "./components/Loading";

function App() {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState({
        items: [],
        totalRecordsCount: 0
    });

    useEffect(() => {
        setLoading(true);
        axios.get(`https://c01yiahobi.execute-api.ap-northeast-1.amazonaws.com/dev/dynamo/All`)
        .then(res => {
            setResults({
                items: res.data.items,
                totalRecordsCount: res.data.totalRecordsCount
            })
            setLoading(false);
        }).catch(err => {
            console.log(err)
            alert("err!");
        });
    }, []);

    return (
        <div className="wrapper">
            <div className="container">
                <Title />
                <Form />
				{loading ? <Loading /> : <Results results={results} /> }
            </div>
        </div>
    );
}

export default App;
