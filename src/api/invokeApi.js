import axios from "axios";

const url = "https://c01yiahobi.execute-api.ap-northeast-1.amazonaws.com/dev";

export const getAlldeta = async () => {
    try {
        const response = await axios.get(`${url}/dynamo/All`);
        return {
            items: response.data.items,
            totalRecordsCount: response.data.totalRecordsCount
        };
    } catch (error) {
        console.error(error);
        throw new Error('Network response was not ok');
    }
}

export const deleteItem = (id, setLoading) => {
    setLoading(true);
    axios.delete(`${url}/dynamo/${id}`)
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.error(err);
        alert("err!");
        throw new Error('Network response was not ok');
    });
    setLoading(false);
}

export const addItem = (e, item) => {
    e.preventDefault()
    const requestData = {
        value: item,
    };
    axios.post(`${url}/dynamo`,requestData)
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.error(err);
        alert("err!");
        throw new Error('Network response was not ok');
    });
}

export const updateItem = (id, item) => {
    const requestData = {
        value: item,
    };
    axios.put(`${url}/dynamo/${id}`, requestData)
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.error(err);
        alert("err!");
        throw new Error('Network response was not ok');
    });
}