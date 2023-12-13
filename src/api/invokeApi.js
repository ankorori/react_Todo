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

export const deleteItem = async (id) => {
    try {
        const response = await axios.delete(`${url}/dynamo/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Network response was not ok');
    }
}

export const addItem =  async (e, item) => {
    try {
        if(item === ""){
            alert("空白です");
            return;
        }
        e.preventDefault()
        const requestData = {
            value: item,
        };
        const response = await axios.post(`${url}/dynamo`,requestData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Network response was not ok');
    };
}

export const updateItem = async (id, item) => {
    try {
        if(item === ""){
            alert("空白です");
            return;
        }
        const requestData = {
            value: item,
        };
        const response =  await axios.put(`${url}/dynamo/${id}`, requestData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Network response was not ok');
    };
}