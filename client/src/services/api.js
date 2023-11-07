import axios from "axios";

const API_URL = "http://localhost:5000";  //TODO: Move to .env || replace with backend url

export const uploadFile = async (data) => {
    try {
        let res = await axios.post(`${API_URL}/upload`, data);
        return res.data;
    } catch (error) {
        console.log(error);
        console.error("Error uploading file API", error.message);
    }
};
